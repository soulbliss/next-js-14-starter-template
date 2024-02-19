# Free Next JS 14 boilerplate for indiehackers!

Modified from [shadcn-ui](https://github.com/shadcn-ui)/[taxonomy](https://github.com/shadcn-ui/taxonomy) project. Do check it out. Modified it for my daily purpose.

A Next.js 14 template for indiehackers, buildinpublic people to building apps quickly.

Uses Postgres as DB, NextAuth 4, Tailwind CSS has support for dark mode.

Open to suggestions to make this better for indiehackers to get started with their projects and code fast!

![cover](/Users/deepakgarasangi/Development/next-js-14-starter-template/public/cover.png)

## Usage

```bash
git clone https://github.com/soulbliss/next-js-14-starter-template.git
```

## Features

- Next.js 14 App Directory
- Node pg support
- NextAuth 4
- Radix UI Primitives
- Tailwind CSS
- Google fonts
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Tailwind CSS class sorting, merging and linting.

## Guide for beginners

1. For generating quick logos use [Logofa.st](https://logofa.st/) by Marc louvin and put the generated logo in `/public` folder.
2. Use [Favicon Generator](https://realfavicongenerator.net/) for site icon. Download the zip file and put this into the `/public` folder:
3. Can find nice hero patterns for landing page here on [hero patterns](https://heropatterns.com/)

### Adding login functionality

1. Copy `sample.env.local`  and create `env.local`. Fill up the postgres database credentials.

2. ```
   PG_DB_USER=
   PG_DB_NAME=
   PG_DB_PASSWORD=
   PG_DB_HOST=localhost
   PG_DB_PORT=5432
   PG_DB_SSL=false
   PG_DB_MAX_CONNECTIONS=20
   PG_DB_IDLE_TIMEOUT=10000
   
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   ```

3. You need to connect to a postgres instance

4. Copy `sample.env.local`  and create `env.local`. Fill up the postgres database credentials.

5. ```
   PG_DB_USER=
   PG_DB_NAME=
   PG_DB_PASSWORD=
   PG_DB_HOST=localhost
   PG_DB_PORT=5432
   PG_DB_SSL=false
   PG_DB_MAX_CONNECTIONS=20
   PG_DB_IDLE_TIMEOUT=10000
   ```

6. Open migrations file and run the Sql query.

7. Run `pnpm run dev` and you can use login

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
