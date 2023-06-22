'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function getConfig(key) {
    const config = {
        port: 3200,
        mysql_config: {
            dialect: 'mysql',
            host: '',
            port: 3306,
            username: 'chatgpt',
            password: '',
            database: 'chatgpt',
            timezone: '+08:00',
            dialectOptions: {
                dateStrings: true,
                typeCast: true
            }
        },
        redis_config: {
            type: 'redis',
            host: '127.0.0.1',
            port: 6379,
            password: ''
        },
        email: 'noticecode@163.com',
        email_config: {
            host: 'smtp.163.com',
            port: 25,
            ignoreTLS: true,
            secure: false,
            auth: {
                user: 'noticecode@163.com',
                pass: ''
            }
        }
    };
    if (key) {
        return config[key];
    }
    return config;
}
exports.default = {
    getConfig
};
//# sourceMappingURL=index.js.map