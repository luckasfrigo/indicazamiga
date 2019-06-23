# Indicazamiga

## Setup
For local development you will need to create a directory named `localcert` on `server` directory. You should put `localhost.crt`, `localhost.key` and `localhost.cer` there. These links may be helpful:
- https://letsencrypt.org/docs/certificates-for-localhost/
- https://superuser.com/questions/1083766/how-do-i-deal-with-neterr-cert-authority-invalid-in-chrome/1235250#1235250

Also you will need an .env file in `client` directory:
```
REACT_APP_SERVER_URL=https://api.indicazamiga.com.br/
```

And another in `server`:
```
GOOGLE_KEY=
GOOGLE_SECRET=
FACEBOOK_KEY=
FACEBOOK_SECRET=
SESSION_SECRET=
```

## Initialize development
Start server
```
#from root folder
cd server
yarn start
```

Start client
```
#from root folder
cd client
yarn start
```

## Deploy
```
#from root folder
devspace deploy
```