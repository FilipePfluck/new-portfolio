export const techs = {
  cva: {
    id: 'cva',
    name: 'Class Variance Authority',
    src: 'tech/cva.svg',
    size: 'sm',
    techColor: 'next',
    bgColor: 'whiteLogo',
    mt: 'auto',
    description:
      'Class variance authority is a library used to organize classnames and add variants. It makes development easier and more organized, specially when working with tailwind.',
  },
  styledComponents: {
    id: 'styledComponents',
    name: 'Styled Components',
    src: 'tech/styledcomponents.svg',
    size: 'sm',
    techColor: 'styledComponents',
    bgColor: 'pinkLogo',
    description:
      'Styled components is a css-in-js library that let you create React components with the given styles, while also using the power of javascript. Unfortunatelly it requires runtime execution of javascript, which means it cannot be used in NextJS 13 app folder and other modern frameworks',
  },
  framerMotion: {
    id: 'framerMotion',
    name: 'Framer Motion',
    src: 'tech/framer-motion.svg',
    size: 'sm',
    techColor: 'motion',
    bgColor: 'pinkLogo',
    description:
      'Framer Motion is a powerfull library that let you create complex animations easily and with a declarative syntax. It supports variants, gestures, layout animations, scroll animations and much more.',
  },
  reactHookForm: {
    id: 'reactHookForm',
    name: 'React Hook Form',
    src: 'tech/reacthookform.svg',
    size: 'sm',
    techColor: 'graphql',
    bgColor: 'pinkLogo',
    marginLeft: 'auto',
    description:
      'React Hook Form is an open source library that help you manage your form states. It is very focused on performance, painting faster and performing less rerenders then other libraries that try to solve the same problems.',
  },
  storybook: {
    id: 'storybook',
    name: 'Storybook',
    src: 'tech/storybook.svg',
    size: 'md',
    techColor: 'storybook',
    bgColor: 'pinkLogo',
    description:
      'Storybook is a frontend workshop for building UI components and pages in isolation. It is extremely useful for testing and documentation. It has integration with most frameworks and also has a lot of plugins. I used storybook extensively on Dexper, and I am also using it regularly on my personal projects.',
  },
  cypress: {
    id: 'cypress',
    name: 'Cypress',
    src: 'tech/cypress.svg',
    size: 'sm',
    techColor: 'cypress',
    bgColor: 'greenLogo',
    description:
      'Cypress is a tool for frontend testing, being able to perform both unit and e2e tests. It runs in an actual browser so it is able to test things tools like jest cannot.',
  },
  reactTestingLibrary: {
    id: 'reactTestingLibrary',
    name: 'React Testing Library',
    src: 'tech/testinglibrary.svg',
    size: 'sm',
    techColor: 'testingLibrary',
    bgColor: 'redLogo',
    description:
      'React Testing Library is a library to test react applications. You can write tests to ensure your components work as expected in isolation and combined with other components. You can also make tests to ensure your components are accessible. Writing automated tests is crucial because as an application grows, it becomes difficult to test everything manually.',
  },
  git: {
    id: 'git',
    name: 'Git',
    src: 'tech/git.svg',
    size: 'md',
    techColor: 'git',
    bgColor: 'orangeLogo',
    description:
      'Git is a tool for code versioning, and it is used for most teams across the globe. I have used git and github on my previous jobs and on my personal projects. I also have contributed to a few open source projects.',
  },
  nest: {
    id: 'nest',
    name: 'Nest',
    src: 'tech/nestjs.svg',
    size: 'md',
    techColor: 'nest',
    bgColor: 'redLogo',
    mt: 'auto',
    description:
      'Nest is a NodeJS framework for building efficient, reliable and scalable server-side applications. It comes with integration for most popular tools and is very extensible due to its modular nature.',
  },
  fastify: {
    id: 'fastify',
    name: 'Fastify',
    src: 'tech/fastify.svg',
    size: 'sm',
    techColor: 'next',
    bgColor: 'whiteLogo',
    mt: 'auto',
    description:
      'Fastify is a highly performant NodeJS framework. It let you create routes for your APIs and validate the requests and responses. ',
  },

  unocss: {
    id: 'unocss',
    name: 'Uno CSS',
    src: 'tech/unocss.svg',
    size: 'sm',
    techColor: 'unocss',
    bgColor: 'whiteLogo',
    description:
      'Uno CSS is a atomic CSS engine that generate css classnames on demand. It is fully customizable, lightweight, faster than tailwind and has features like aliasing, attribufy mode, variant groups and much more.',
  },
  pandacss: {
    id: 'pandacss',
    name: 'Panda CSS',
    src: 'tech/pandacss.svg',
    size: 'sm',
    techColor: 'panda',
    bgColor: 'yellowLogo',
    description:
      'Panda CSS is a styling library that has css-in-js syntax, but generate static CSS at build time. It is typesafe and has amazing developer experience.',
  },
  tailwindcss: {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    src: 'tech/tailwind-css.svg',
    size: 'md',
    techColor: 'tailwind',
    bgColor: 'blueLogo',
    description:
      'Tailwind CSS is a utility-first CSS framework packed with thousands of classes to make the UI development faster. It is easy to customize, let you build anything you can build with regular css, and the build size is tiny. I personally do not really like to write my styles in the HTML, but I think tailwind is an awesome tool when paired with other tools like CVA.',
  },
  expo: {
    id: 'expo',
    name: 'Expo',
    src: 'tech/expo.svg',
    size: 'sm',
    techColor: 'next',
    bgColor: 'whiteLogo',
    description:
      'Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React. It provides several tools to develop React Native applications.',
  },
  qwik: {
    id: 'qwik',
    name: 'Qwik',
    src: 'tech/qwik.svg',
    size: 'sm',
    techColor: 'qwik',
    bgColor: 'purpleLogo',
    description:
      'Qwik is a new javascript framework that tries to optimize performance in the web by taking a new approach from the ground up. Qwik skips hydration altogether thanks to a concept called resumability. This approach keeps the TTI almost linear as the app size grows.',
  },
  react: {
    id: 'react',
    name: 'React',
    src: 'tech/react.svg',
    size: 'lg',
    techColor: 'react',
    bgColor: 'blueLogo',
    description:
      'React is a library that makes frontend development easier. It lets you build user interfaces our of individual pieces called components, and combine them together. It also comes with several hooks that halp you develop most use-cases. I have been studying React for four years and have two years of professional experience.',
  },
  jest: {
    id: 'jest',
    name: 'Jest',
    src: 'tech/jest.svg',
    size: 'sm',
    techColor: 'jest',
    bgColor: 'pinkLogo',
    description:
      'Jest is a tool for testing javascript applications. It gives a friendly api and is suited for all kinds of tests: from unity to integration and e2e. By writing automated tests you can confidently deliver code, knowing that it will not break unexpectedly and without anyone noticing.',
  },
  vitest: {
    id: 'vitest',
    name: 'Vitest',
    src: 'tech/vitest.svg',
    size: 'sm',
    techColor: 'vitest',
    bgColor: 'greenLogo',
    description:
      'Vitest is a testing tool very similar to Jest. It is extremely fast as it is powered by Vite and uses esmodules.',
  },
  typescript: {
    id: 'typescript',
    name: 'Typescript',
    src: 'tech/typescript.svg',
    size: 'md',
    techColor: 'typescript',
    bgColor: 'blueLogo',
    description:
      'Typescript is a superset of javascript that enables static types. It gives more type safety to the code, and help catching errors. It also makes the code editor much more powerful and gives much more productivity to the developer.',
  },
  nodejs: {
    id: 'nodejs',
    name: 'NodeJS',
    src: 'tech/nodejs-icon.svg',
    size: 'md',
    techColor: 'node',
    bgColor: 'greenLogo',
    description:
      'NodeJS is a javascript runtime environment, that essentially allows javascript to run on the server. While javascript is arguably less suited for the backend compared to other languages, it is very flexible and let you build pretty much anything very fast. I have two years of experience working with Node.',
  },
  redis: {
    id: 'redis',
    name: 'Redis',
    src: 'tech/redis.svg',
    size: 'sm',
    techColor: 'redis',
    bgColor: 'redLogo',
    description:
      'Redis is a open source in-memory database. Because it is in-memory, it is very fast and extremelly suited for caching. ',
  },
  sequelize: {
    id: 'sequelize',
    name: 'Sequelize',
    src: 'tech/sequelize.svg',
    size: 'sm',
    techColor: 'sequelize',
    bgColor: 'blueLogo',
    description:
      'Sequelize is a ORM for javascript, that makes it easier to manage databases in NodeJS applications. I used it extensively when I worked for Vobi.',
  },
  socketio: {
    id: 'socketio',
    name: 'Socket.io',
    src: 'tech/socketdotio.svg',
    size: 'sm',
    techColor: 'next',
    bgColor: 'whiteLogo',
    description:
      'Socket.io is a technology that allows real-time and communication between client and server. The connection is not closed after the request, as oposed to HTTPS.',
  },
  prisma: {
    id: 'prisma',
    name: 'Prisma',
    src: 'tech/prisma.svg',
    size: 'md',
    techColor: 'prisma',
    bgColor: 'blueLogo',
    description:
      'Prisma is a next-generation ORM for NodeJS. It unlocks a new level of developer experience thanks to its typescript integration. Prismas data model allows the code editor to understand your database structure and makes it extremelly type-safe.',
  },
  reactNative: {
    id: 'reactNative',
    name: 'React Native',
    src: 'tech/react-native.svg',
    size: 'md',
    techColor: 'react',
    bgColor: 'blueLogo',
    description:
      'React Native let you develop cross-platform mobile apps using Reacts syntax. You write javascript, and it is compiled to native code. I developed some apps with React Native as study, but I have never used it on a job or in a production environment yet.',
  },
  nextJs: {
    id: 'nextJs',
    name: 'Next.js',
    src: 'tech/next-js.svg',
    size: 'lg',
    techColor: 'next',
    bgColor: 'whiteLogo',
    description:
      'NextJS is a framework that makes React even more powerfull. It lets you use SSR and build static pages (that are much faster) while keeping the dynamism and reactivity of React. It combines the best of both worlds: static pages and dynamic pages. It also comes with several other useful utilities, like Image optimization, font loading, SEO optimization and much more.',
  },
  radixui: {
    id: 'radixui',
    name: 'Radix UI',
    src: 'tech/radix-ui.svg',
    size: 'md',
    techColor: 'radix',
    bgColor: 'whiteLogo',
    description:
      'Radix is a library that provide functional, composible, accessible and unstyled component primitives. I personally love to use Radix because it gives me the components already functional and accessible, while still giving me total freedom to style them and alter their functionallity.',
  },
  stitches: {
    id: 'stitches',
    name: 'Stitches',
    src: 'tech/stitches.svg',
    size: 'sm',
    techColor: 'radix',
    bgColor: 'whiteLogo',
    description:
      'Stitches is a css-in-js library with near-zero runtime, small bundle size, SSR, multi-variant support, and a best-in-class developer experience. It came up with the variants api, wildly adopted by other libraries later on.',
  },
  figma: {
    id: 'figma',
    name: 'Figma',
    src: 'tech/figma.svg',
    size: 'sm',
    techColor: 'figma',
    bgColor: 'redLogo',
    description:
      'Figma is a colaborative interactive design tool used by teams across the globe. It allows multiplayer editing, comments and all the work is saved on the cloud. It also has a giant community and tons of plugins.',
  },
  reactQuery: {
    id: 'reactQuery',
    name: 'React Query',
    src: 'tech/reactquery.svg',
    size: 'sm',
    techColor: 'reactQuery',
    bgColor: 'redLogo',
    description:
      'React Query is a tool used in client side fetching in React applications. It keeps cache on the browser to avoid making multiple requests. The cache can be updated when the data is marked as stale. It is a really complete tool that helps building almost anything.',
  },
  graphql: {
    id: 'graphql',
    name: 'Graphql',
    src: 'tech/graphql.svg',
    size: 'sm',
    techColor: 'graphql',
    bgColor: 'pinkLogo',
    description:
      'GraphQL is a query language, that is, a language used in the communication between APIs. It lets you fetch exactly what you need, withou overfetching or underfetching. ',
  },
  novu: {
    id: 'novu',
    name: 'Novu',
    src: 'tech/novu.svg',
    size: 'sm',
    techColor: 'novu',
    bgColor: 'redLogo',
    description:
      'Novu is a open-source notification infrastructure for developers. It manages communication by email, SMS and push notifications. It has a digest engine that aggregates multiple events into a single notification, enables user preferences and much more.',
  },
  postgresql: {
    id: 'postgresql',
    name: 'Postgres',
    src: 'tech/postgresql.svg',
    size: 'md',
    techColor: 'postgres',
    bgColor: 'blueLogo',
    description:
      'PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance. It is usually my go-to when dealing with databases.',
  },
  firebase: {
    id: 'firebase',
    name: 'Firebase',
    src: 'tech/firebase.svg',
    size: 'sm',
    techColor: 'firebase',
    bgColor: 'yellowLogo',
    description:
      'Firebase is a development platform provided by Google. It provides a set of tools, like authentication and storage. I used firestore extensively on Dexper, as we stored the client theme and all the texts in different languages in a object document.',
  },
  docker: {
    id: 'docker',
    name: 'Docker',
    src: 'tech/docker.svg',
    size: 'sm',
    techColor: 'docker',
    bgColor: 'blueLogo',
    description:
      'Docker is a platform used to develop, ship and run applications inside containers. Containers are stand-alone, executable and isolated software packages. Docker is widely used to host databases and microservices. I have used Docker before, but I am not specialized in devops.',
  },
  kafka: {
    id: 'kafka',
    name: 'Apache Kafka',
    src: 'tech/apachekafka.svg',
    size: 'sm',
    techColor: 'next',
    bgColor: 'whiteLogo',
    description:
      'Kafka is a tool used to manage messages between microservices, and ensure that no data is lost if a service ever goes down. Different services can publish and subscribe to data on kafka. ',
  },
} as const
