This is my personal blog, I use Ghost + ghost-s3 plugin

Here is the configuration you have to setup, to get your Ghost running.

```sh
$ herok config:add NODE_ENV=production

$ herok config:add MYSQL_DATABASE=<database-name>
$ herok config:add MYSQL_HOST=<database-host>
$ herok config:add MYSQL_PASSWORD=<database-password>
$ herok config:add MYSQL_USER=<database-username>

$ herok config:add AWS_ACCESS_KEY_ID=<your-aws-access-key>
$ herok config:add AWS_REGION=<your-aws-region>
$ herok config:add AWS_SECRET_ACCESS_KEY=<your-aws-secret-key>
$ herok config:add AWS_STORAGE_BUCKET_NAME=<your-bucket-name>
```
