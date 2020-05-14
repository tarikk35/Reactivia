# Reactivia - A Trivia App
## By Tarık Köprülü

Made with ❤ in one week-end.

### App demo on Netlify to check out:  
[https://5ea5df1e03d6d45674082a99--peaceful-mayer-4adbaf.netlify.app](https://5ea5df1e03d6d45674082a99--peaceful-mayer-4adbaf.netlify.app)
I must warn you, even easy questions can be pretty hard :)


### Libraries I used:
- **axios** for better error handling, manipulating requests and responses better way via interceptors.
- **he** for decoding html entities coming from response strings back to human language.
- **react-lottie**  for sweet and easily implemented animations.
- **redux** for easy-to-maintain and predictable state management inside the app.
- **react-router-dom** for routing, redirecting and changing browser's url in a single page application and render corresponding components based on url (SPA).
- **react-slick** for mobile friendly and responsive carousel component.
- **redux-thunk** for making asynchronous redux actions possible.
- **semantic-ui-react** for beautifully made ready-to-use components like full page loading screens, buttons etc. (Only used it for Loading Screen).

### Some features of App
- Category selection from over 20 categories
- Hardness selection
- Responsive
- Used OpenTriviaDB to power up this App
- Routing in SPA
- Changing point and grade system
- Timer
- One-time only hint system that eliminates two random wrong answers

### Things I learned while doing this project
- Usage of Lottie. It was very similar to **flutter_flare** package which I used before.
- Usage and realizing the existence of Netlify. This service makes it so easy to deploy apps.
- he package for decoding html entities.
- Optimizing images for lesser sizes with about same quality.

### Things to Improve
- Maybe code splitting with React.lazy and Suspense?
- axios interceptors for better handling of errors related of API and network
- PropTypes for type-safety
- Proper error page for cases like no connection.
- Better routing for quizzes(not sure about that).
- Single timer variable for preventing one unwanted tick after quiz is finished/failed before the timer runs out of time.
- Token system for not seeing same questions? (Theres not much questions, so I skipped it but API Provides this feature)
