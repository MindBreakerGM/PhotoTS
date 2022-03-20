### PhotoTS
Technology stack
- TypeScript
- Express
- JWT
- MongoDB


## Api endpoints

```
Auth
/register - user registration,method POST
/login - login and password authorization,method POST

Photos
/load-photos - uploading photos,method POST
/change-album-title - change album name by id,method PUT
/delete-photo - deleting photos by id,method DELETE
/delete-album - deleting album by id,method DELETE
/get-photos - getting all photos with pagination,method GET
```

<h2>Start project local</h2>

```
tsc -b

node app.js
```
