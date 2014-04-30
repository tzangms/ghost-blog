// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        url: 'http://127.0.0.1:8000',

        // Example mail config
        // Visit http://docs.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```
        aws: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            bucket: process.env.AWS_STORAGE_BUCKET_NAME,
            region: process.env.AWS_REGION
        },

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '8000'
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://tzangms.com',
        mail: {
            fromaddress: process.env.EMAIL_USER,
            transport: 'SMTP',
            options: {
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                }
            }
        },

        aws: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            bucket: process.env.AWS_STORAGE_BUCKET_NAME,
            region: process.env.AWS_REGION
        },

        database: {
            client: 'mysql',
            connection: {
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE,
                port: '3306'
            }
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    },

    // ### Travis
    // Automated testing run through Github
    travis: {
        url: 'http://127.0.0.1:2368',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-travis.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    }
};

// Export config
module.exports = config;
