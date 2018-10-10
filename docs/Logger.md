### Logging

Logging is the process of writing log messages during the execution of a program to a central place. This logging allows you to report and persist error and warning messages as well as info messages (e.g., runtime statistics) so that the messages can later be retrieved and analyzed.

We have added a logging mechanism mostly to get an idea of errors while rendering on the server. This way we have an idea of what APIs failed or what kind of pages the users loads the most.

#### Performance logging

Response times are one of the most common and useful system performance measures available from your log data. They give you an immediate understanding of how long a request is taking to be returned. For example, request-response time logs data can give you insight into how long a request takes to return a response to a client device. This can include time taken for the different components behind your web server (application servers, DBs) to process the request, so it can offer an immediate view of how well your application is performing.

With this data at your fingertips, you’ll be able to detect bottlenecks, diagnose user problems, and gain deep insights into how well our application is behaving across environments.

To achieve this we added an express middleware that will give us an idea of what the request was, on what machine, log time, log level, request method and how long did it take to respond back.

However, this only gives us a high-level view. We can identify if and when slow-downs occurred, but we need to run more diagnostic queries to get to the root cause of the problem.

The middleware that was used to achieve this is present in `/server/utils/perfCalc.js`. And the file that it logs out to is present in `logs/perf.log`

### Error logging while SSR

An error log is the single best way to dispassionately gather data about your own performance and pinpoint potential weak areas. With an error logger that is planned with keywords, we can sort specifically by question type or key words and go through it to figure out what components failed to render and what was the reason behind it. It is one single best way to check how your end users saw the page.

To achieve error logging we introduced a logger that writes all the errors based on the log level set into the environment onto a file specified by you. You can create multiple logs as you like.

For instance you can have a logger that logs component based error, and another one that logs page level errors. By default we have an error logger exposed out. It is used to log criticalData missing error when pages failed to load as APIs didnt respond back with the right data.

#### How do I create my own custom logger?

You can create an instance from the loggerFactory and call the getLogger method, which returns an object that contain methods like error. debug, info.

```js
const CustomLogger = require("/app/utils/loggerFactory");
const myLogger = new CustomLogger(`myFileName.log`);

const log = myLogger.getLogger("someLogger");
log.error("I am an error caused because you wrote some dirty code!!!");
log.info("I am an info message!!");
```

How do I use the default logger?

The logger Instance that is exposed out is a singleton logger that give you a console like logger when you just call it without any params.

```js
const defaultLogger = require("/app/utils/logger");

const log = defaultLogger.getLogger();
log.error("I am an error caused because you wrote some dirty code!!!");
log.info("I am an info message!!");
```

And whenever you import this default Logger it will return you the default logger always as its a singleton. But if you call the getLogger method with a name(param). It creates a new logger fo you and then returns the default log with a custom name.

```js
const defaultLogger = require("/app/utils/logger");

const funnylogger = defaultLogger.getLogger("funnylogger");
funnylogger.error(
  "I am an error caused because you wrote some dirty code!!! And I am funny..."
);
funnylogger.info("I am an info message!! And I am funny...");
```

### Error logging on client side

Winston, the logger module, which we use for logging uses the fs module to write logs onto a file. But since fs is not available on the browser, and also to avoid unwanted modules to be bundled on the client bundles, we create a mock file that exports a noop function. We also create a alias in the next.config.js so that when webpack resolves it, it picks the fake module meant for the browser.

So there will be no logging on the clientside currentlt.
