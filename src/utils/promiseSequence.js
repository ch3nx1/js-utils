// 串行promise

/**
 * @param {URL[]} inputs
 * @param {promise} promiseMaker
 * @return {}
 */
function promiseSequence(inputs, promiseMaker) {
    //为数组创建一个可修改的私有副本
    inputs = [...inputs];
    function handelNextInput(outputs) {
        if (inputs.length === 0) {
            return outputs;
        } else {
            let nextInput = inputs.shift();
            return promiseMaker(nextInput).
                then(output => outputs.concat(output)).
                then(handelNextInput);
        }
    }
    return Promise.resolve([]).then(handelNextInput);
}
promiseSequence(urls, fetchBody)

