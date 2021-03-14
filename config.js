const {
    FTP_DEMO_HOST,
    FTP_DEMO_USER,
    FTP_DEMO_PASSWORD,
    FTP_DEMO_DEST,
    FTP_DEMO_URI
} = process.env;

module.exports = {
    title: `Volga Coffee Fest`,
    description: `Volga COFFEE FEST - фестиваль вкусного кофе в Самаре! Региональный чемпионат по кап-тестингу 2021 (10/04)`,
    common: {
        authors: [{
            name: `Александр Довлатов`,
            job: `Верстальщик`,
            contacts: [{
                title: `@digikid`,
                href: `https://t.me/digikid`
            }]
        }],
        copyright: `Интернет-агентство «МегаМир»`
    },
    paths: {
        vendor: {
            rellax: [
                `./node_modules/rellax/rellax.min.js`
            ]
        }
    },
    ftp: {
        demo: {
            host: FTP_DEMO_HOST,
            user: FTP_DEMO_USER,
            password: FTP_DEMO_PASSWORD,
            dest: FTP_DEMO_DEST,
            uri: FTP_DEMO_URI
        }
    },
    presets: {
        global: {
            index: false
        },
        build: {
            debug: true
        }
    }
};