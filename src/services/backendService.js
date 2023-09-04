// eslint-disable-next-line
export default {
    async getDetails() {
        try {
            const result = await fetch('http://localhost:8086/details/get-details');
            const jsonResult = await result.json();

            return jsonResult;
        } catch (error) {
            console.log("Error while fetching skills", error);
        }
    },

    async getSkills() {
        try {
            const result = await fetch('http://localhost:8086/skills/get-skills');
            const jsonResult = await result.json();

            return jsonResult;
        } catch (error) {
            console.log("Error while fetching skills", error);
        }
    },

    async getYouTubeData() {
        try {
            const result = await fetch('http://localhost:8086/youtube/get-videos');
            const jsonResult = await result.json();

            return jsonResult;
        } catch (error) {
            console.log("Error while fetching YouTube data", error);
        }
    },

    async getInstagramData() {
        try {
            const result = await fetch('http://localhost:8086/instagram/get-posts');
            const jsonResult = await result.json();

            return jsonResult;
        } catch (error) {
            console.log("Error while fetching Instagram data", error);
        }
    }
}