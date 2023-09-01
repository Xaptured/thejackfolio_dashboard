// eslint-disable-next-line
export default {
    async getDetails() {
        const result = await fetch('http://localhost:8086/details/get-details');
        const jsonResult = await result.json();

        return jsonResult;
    },

    async getSkills() {
        const result = await fetch('http://localhost:8086/skills/get-skills');
        const jsonResult = await result.json();

        return jsonResult;
    },

    async getYouTubeData() {
        const result = await fetch('http://localhost:8086/skills/get-skills');
        const jsonResult = await result.json();

        return jsonResult;
    },

    async getInstagramData() {
        const result = await fetch('http://localhost:8086/instagram/get-posts');
        const jsonResult = await result.json();

        return jsonResult;
    }
}