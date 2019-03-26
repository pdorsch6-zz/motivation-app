
async function fetchData(url, settings) {
    if(!url) throw new Error('No url found');
    try {
        let response = await fetch(url, settings);

        if(!response.ok) {
        throw new Error(`HTTP status code: ${response.status} - ${response.statusText}`);
        }

        return await response.json();
    } catch (err) {
        // if it fails to execute fetch, parse the JSON or something else catastrophic happens
        throw err;
    }
}
  