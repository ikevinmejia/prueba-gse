import axios from "axios";

const getData = async(state, url) => {
    const resp = await axios.get(url)
    state(resp.data.results[0])
}

export {
    getData
}