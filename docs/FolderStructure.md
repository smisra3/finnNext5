# Folder Structure

Our app structure follows `atomic` design principles. More can be read [here](http://bradfrost.com/blog/post/atomic-web-design/)

![alt text](./img/atomic.png 'Atomic Design')

**App**

- **global**: In this folder, all the required global actions, reducers, sagas etc. which will be dispatched will reside. These are app level elements, e.g failure_capture, authentication, and to maintain tokens etc.

- **static**: Static assets like images will reside here and will be served via nginx.

- **components**: All components will reside here in a structured manner. For further breakdown of component hierarchy please see [here](./Component.md)

- **constants**<br>The constants which will be used for the application

* **lib**<br>Custom framework to create a wrapper and writing custom code in lifecycle methods. TODO, need inputs from devs

- **pages**<br>Basically the start point for Next.js. Pages are specific instances of templates. Here, placeholder content is replaced with real representative content to give an accurate depiction of what a user will ultimately see. Pages are the highest level of fidelity and because they’re the most tangible, it’s typically where most people in the process spend most of their time and what most reviews revolve around.<br>The page stage is essential as it’s where we test the effectiveness of the design system. Viewing everything in context allows us to loop back to modify our molecules, organisms, and templates to better address the real context of the design.

- **styles**<br>Contains all style related files. Themes, typography, colors, region level themes etc. at the global level

- **utils**<br>This contains loggers and other utilities.

- **config**<br> This will have our configuration files. e.g. Jest config(testing framewok), Environment config etc

- **mocks**<br> This has all the mock json data - to be used for development.
