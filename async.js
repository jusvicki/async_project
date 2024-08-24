// iterating with async/await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Example usage:
iterateWithAsyncAwait(['A', 'B', 'C']);


// Awaiting a call
async function awaitCall() {
    // Simulating an API call
    const fakeApiCall = new Promise((resolve) => {
        setTimeout(() => {
            resolve('API response data');
        }, 2000);
    });

    try {
        const data = await fakeApiCall;
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

// Example usage:
awaitCall();

//  Handling error with async/await
async function awaitCall() {
    const fakeApiCall = new Promise((resolve, reject) => {
        // Simulating a failed API call
        setTimeout(() => {
            reject(new Error('Network error'));
        }, 2000);
    });

    try {
        const data = await fakeApiCall;
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

// Example usage:
awaitCall();


// Chaining async/await
async function delayLog(message) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 1000);
    });
}

async function chainedAsyncFunctions() {
    await delayLog('First function');
    await delayLog('Second function');
    await delayLog('Third function');
}

// Example usage:
chainedAsyncFunctions();




// Awaiting Concurrent Request
async function concurrentRequests() {
    const fakeApiCall1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Response from API 1');
        }, 1500);
    });

    const fakeApiCall2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Response from API 2');
        }, 1000);
    });

    try {
        const [response1, response2] = await Promise.all([fakeApiCall1, fakeApiCall2]);
        console.log('Combined results:', response1, response2);
    } catch (error) {
        console.error('Error in concurrent requests:', error);
    }
}

// Example usage:
concurrentRequests();

