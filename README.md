## API wrapper for CMTY space

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Sample Usage

#### JavaScript

```js
fetch('https://vantient-lexical-server.vercel.app/query/quest', {
  body: JSON.stringify({
    _k: `Quest/${questID}`,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'POST',
})
  .then((response) => response.json())
  .then(({ data }) => {
    const { quest } = data
    if (!quest) return
    console.log(quest)
  })
```

#### cURL

```sh
curl 'https://vantient-lexical-server.vercel.app/query/quest' \
  -H 'authority: vantient-lexical-server.vercel.app' \
  -H 'accept: */*' \
  -H 'accept-language: en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'content-type: application/json' \
  -H 'origin: http://localhost:3000' \
  -H 'referer: http://localhost:3000/' \
  -H 'sec-ch-ua: "Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' \
  --data-raw '{"_k":"Quest/5JJaVaNjfOvxcGDvJZzQkYMaexkElGhW"}' \
  --compressed
```
