npm run start:dev

docker compose up


POST localhost:3000/authentication/register
JSON
{
"email": "test@test.com",
"name": "aladin",
"password": "123456789"
}

POST localhost:3000/authentication/log-in
{
"email": "test@test.com",
"name": "aladin",
"password": "123456789"
}

POST localhost:3000/authentication/log-out
