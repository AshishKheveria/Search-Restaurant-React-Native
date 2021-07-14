import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer k6jjV2uAgUgVJOMoy0hFFJ_Z2xKYIKVPnScSFyjpI-wDXiYVtKvHGQ4OXPZclFCFORt0H1jq4EPh6GVaRi4wuhuGETDe3lmdExRhlTOQwYeQz1P0G_fUz4O5xszcYHYx"
    }
})