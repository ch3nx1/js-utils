

function sendRequest(urls, max, callback) {

    urls = [...urls];
    const resolves = [];
    while (urls.length) {
        end = Math.min(max, urls.length);
        Promise.all(urls.splice(0, end).
            map(url => fetch(url))).
            then(resArr => resolves.push(resArr));
    }
    callback();

}