/** @type {import("next").NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return 'my-build-id';
    },
};
