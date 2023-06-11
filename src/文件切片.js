const uploader = document.getElementById('uploader');
const progress = document.getElementById('progress');
function read(file) {
    const reader = new FileReader();
    return new promise((resolve, reject) => {
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}
uploader.addEventListener('change', async (event) => {
    const { files } = event.target;
    const [file] = files;
    if (!file) return;
    uploader.value = null;
    const content = await read(file);
    const hash = CryptoJs.MD5(content);
    const { size, name, type } = file;
    progress.max = size;
    const chunkSize = 64 * 1024;
    let uploaded = 0;
    const local = localStorage.getItem(hash);
    if (local) {
        uploaded = Number(local);
    }
    while (uploaded < size) {
        const end = Math.min(uploaded + chunkSize, size);
        const chunk = file.slice(uploaded, end, type);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('type', type);
        formData.append('size', size);
        formData.append('file', chunk);
        formData.append('hash', hash);
        formData.append('offset', uploaded);
        try {
            await axios.post('/api/upload', formData);
        } catch (e) {
            console.log('上传失败' + e);
            return;
        }
        uploaded += chunk.size;
        localStorage.setItem(hash, uploaded);
        progress.value = uploaded;

    }
    console.log('上传成功');

});