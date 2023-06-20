# Recipe App By DevEd

kixof24948@asoflex.com email for spoonacular API
18951128c1da46549887211df7dc427b API key

The goal of the recipe app is to have several different recipes from an api. When you search for any recipe you get different results. You can also click on each recipe to get more details. There are recipes from random categories, from veggies, and from different country cuisines. 



The recipe app has several pages and components. The pages are:
-  the home page where the popular picks and veggies picks are displayed along with the small navigation that filters through the different countries types of food, and a search bar
- The searched page which displays the items searched for from the API
- The page that display all the different cuisines 
- The details page that displays the details of the recipe.

The components are 
- The popular component which displays the random recipes
- The veggies component which displays the veggies, 
- The search component which carries the search input.
- The category that links to the different categories.


The set up includes creating a component folder and a pages folder which holds the components and the pages respectively. In the pages folder, the Home component which is a page displays the veggies and the popular picks. The pages component displays the home and other subsequent pages. The pages component is called in the App.js component to avoid over crowding it.  Then several dependencies and libraries were installed including styled components, framer motion, react-router-dom, react-icons, 

## App Component
Here the search, the category and pages components are rendered. Also a nav component is added to the app with a logo that links to the home page. Every item is wrapped in a browser router component which is used to make the links work when routing imported from react-router-dom.

## Pages component 
Here the different pages are rendered. Routes and route is imported from react router Dom. Each page is rendered in the route and each route is wrapped In the Routes component. This makes each page routable. That is makes it linkable to. 
The syntax is 
```

<Routes>
	<Route path=“/” element={<Home />} />
	<Route path=“/cuisine/:type“ element={<Cuisine />} />
	<Route path='/searched/:search' element={<Searched />} />
  <Route path='/recipe/:name' element={<Recipe />} />

</Routes>

```

The type is used to dynamically indicate the exact type of cuisine which is set from the cuisine page component. The other pages are the searched page that displays search results, search is used to indicate the searched items to be displayed. The recipe page, the name is used to indicate the name of the recipe page to be displayed.

## Home Component/page
This is the home page where only veggies and popular components are displayed.


## Popular Component
After the set up, the Popular was created first. 

A useState hook was used and the a variable named popular was set with a function setPoular as is done in useState hooks. The popular variable was set to an empty array in the useState using useState([]);
Const [ popular, setPopular ] = useState([]);

Then useEffect was used to call the variable when the page is mounted 
```
useEffect(() => {
 getPopular();
}, [])

```
The api was called using async so that the page stays idle until the data has been fetched.

first a function was created for calling the API.
```
const getPopular = async () => {
    const check = localStorage.getItem('popular');

    if(check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();

      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
      
    }  
  };

```
In the function, to store the data in the localstorage and avoid calling it anytime you refresh,
First a variable named check was created that stores the value of the item if it is in the localStorage. 
then an if statement that does the check, 
If the item is in the localStorage, the function that works on the popular is set to the parsed JSON with the value of the local storage which is set in the check variable. I hope you get.

If its not stored, then the api is then fetched. The constant variable named api is used to fetch the api using away which is an async keyword indicating what you’re waiting for. The fetch() method takes the api link from the spoonacular api to which the api key is attached. The api key was stored in the env file to protect it from prying eye. Using the process.env.REACT_APP_API_KEY, which is the name used to store it in the env. Finally the number of recipes to be fetched is set using number=9.

Another constant variable is named data the value of the api data converted to json format for easy access. 
Finally the function in the useState for the actual variable where the data is stored is given the recipe results from the api which was stored in the data variable using data.recipe.
```
return (
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: "5rem"
        }}>
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
		<Link to={‘/recipe/‘ + recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
		</Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
````
After the logic is set, the jsx is created in the return statement. first using styled components, a div is styled as a wrapper to wrap around all the items. 
Styled component syntax is
```
Const Wrapper = styled.div`
	css declaration
`
```
Then the Wrapper is used as a component like <Wrapper></Wrapper>
Then using the splide component from splide which turns a div into slides. Everything is initially wrapped around the component <Splide> </Splide>
The options of the slide was set to 4 per page and the arrows and dots were removed. 

After this, the popular array is mapped to get each item one by one
Using popular.map((recipe) => {})

Then in return statement of the map, the splideSlide component which affects each individual card on the element was used to wrap around each card element which was used to wrap each recipe item. The title and image were set in the card from the recipe data including recipe image and recipe title. The card was styled using styled components. 
The styling done made the title to be inside the image and the image to have rounded corners. 
In the styled component, a gradient was created to make the title come out properly. the gradient was also made to stay on top the image using position absolute. Then the gradient was added to the card element
A link is wrapped around the content in the card to link each item to the recipe page where you find the description by using the recipe.id to access each individual id.

## Veggies component 
The code is the same as the popular. Just replace the popular with veggies and pick the veggies from the API by using the tag vegetarian In the api call variable. 
```
const [veggie, setVeggie] = useState([]);

Const getVeggie = async () => {
Const check = localStorage.getItem(“veggie”);

If (check) {
setVeggie(JSON.parse(check))
} else {
	const api = await fetch(`apilink);
	const data = api.json()

	localStorage.setItem(‘veggie’. JSON.stringify(data.recipe));
	setVeggie(data.recipe)
}
}

useEffect(() => {
getVeggie();
}, []); 

```
Then the return statement with the wrapper and the splide then the map through the recipe and the card and link with the image and the heading as well as the gradient. 
```
{popular.map((recipe) => {
	

})};

````
## Category Component 
The category component is where theres links to different cuisine  categories including Italian, American, Thai, and Japanese.  Several components and libraries were imported. The icons were imported from react-icons. The icons were used to describe the various categories eg. Hamburger for American, noodles for Japanese. Styled and navlink were also imported. The component is pretty straightforward. The categories were wrapped in a styled component called list. the links were also styled using styled component named Slink. The categories were made to display flex and centered. And in the link each item linked to the individual cuisine page. The category links were styled to be rounded and dark grey color with the icons white. An active class was added to the links and given an orange gradient color. the categories is rendered in the app component.
```
<List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles/>
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </SLink>
      
    </List>
```


## The Cuisine Page
This is the page that displays the different categories of the cuisines from the category.

The logic is the same as the veggies and the popular in  terms of fetching the data from the api. Except a name argument is passed into the getCuisine function for the calling and the name is used in the api call to dynamically indicate the name of the the category being selected. The name is then defined as the parameter on the url, using the useParams 

The params.type is passed into the getCuisine as the name when calling the function in the useEffect hook. The params get the name from the url which in this case is specified in the category page on each category. “/cuisine/American”
Heres the syntax
```
Const [cusine, setCuisine] = useState([]);
Const params = useParams();

Const getCuisine = async (name) => {
	const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);	
	const recipe = await  api.json();
	setCuisine(recipe.results)

}

useEffect(() => {
	
	getCuisine(params.type);

}, [params.type])

```
In the use effect, params.type is added to the dependency array to show get the exact params when the page changes. 

After the logic is set like this, the content is created. Each component is placed in a styled div called grid. Then the map method is used to loop through all the recipe results 
Which is made to be a card using the styled div called card. All this is in the same format as the others so it doesn’t need too much explanation. But for reference, here’s the code
```
    <Grid
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      {cuisine.map((item) => {
        return (
          <Link to={"/recipe/" + item.id}>
            <Card key={item.id}>
              <img src={item.image} alt='item'/>
            
              <h4>{item.title}</h4>
            </Card>
          </Link>
        )
      })}

    </Grid>
```

## The search component and the searched page

### The search component 

In the search component. A simple input is used in a form. To handle the input a useState is defined and set to an empty string. In the input element, an onChange event is defined and the function for the usestate is set to the value of the input using e.target.value. the value is set to the input variable from the useState. This is basically making it a controlled component like in the react course. This allows you to get direct access to the user input and use it to define the search results.  A search icon is added to the input. 
An onSubmit event is set in the form element and set to a submitHandler function that defines what happens when you submit the form by hitting enter after searching. First of all the form is prevented from reloading on submit using the e.preventDefault(). One interesting thing is the way the actual submission is used to navigate to another page. The useNavigate hook is imported from react-router-dom. A constant is named navigate is assigned to the useNavigate hook then the navigate is used in the submitHandler function. And the page to navigate to is defined as the parameter. So instead of a “to=“/searched/” + input” which is used in the categories, since its not a link you’re creating the navigate thing does the work of the “to”
 
The logic is like this.

```
Const [input, setInput] = useState(“”);

Navigate = useNavigate()

Const submitHandler = (e) => {
	e.preventDefault();
	navigate(“/searched/“ + input)}

return (
	<FormStyle onSubmit={submitHandler}>
		<div>
			<FaSearch>
			<input onChange={(e) => setInput(e.target.value) type=“text” value={input} />
		</div>
	</FormStyle>

)
```
### The searched page
 This page displays the search results from the search page. Its also assisted by the api. The api serves a query with various possible search results. As specified when calling the api in the fetch method. The logic is the same as the cuisine page. The difference is that in the api link you add query instead of cuisine it also takes the name of the search which is gotten from the params thing. 

the syntax is: 

```
Const [searchedRecipe, setSearchedRecipe] = useState([]);

Const params = useParams();

Const getSearchedRecipe = async (name) => {
	const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
	const recipe = await data.json()
	setSearchedRecipe(recipe.results);

}

useEffect(() => {
getSearchedRecipe(params.search);

}, [params.search])
```
the content is displayed exactly like the cuisine page. With the link set to {“/recipe/“ + item.id}


## The Recipe page 
here the ingredients, instruction, title, and image are displayed. Its gotten from another section of the api. Which is the information. It comes as an object not an array. first useState is used to define the buttons for instructions and ingredients. the useState is used to define which is active based on which is clicked. The name of the useState variable is activeTab The initial active button is set to the instructions. ps. The buttons and the entire section is styled with styled components. The button is given an active class which makes it darker and highlighted when clicked. The classname of the button is selected using the ternary operator that sets the instruction button class as active if the activeTab is instructions and the same is done with the ingredient. Also an onclick event is set and the useState function setActiveTab is set to the particular button string. 

See how it looks

```
	<Button 
            className={activeTab === "instructions" ? "active" : ""} 
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
```
Also to display the ingredients or the instructions as gotten from the api depending on which button is selected, the content for them are placed in conditional statement. Like so. 
```

{activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (

          <ul>
          {details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
          </ul>
        )}
```
Here the ingredients are displayed as lists by mapping through the ingredients from the api results. The details summary and the instructions are also displayed from the api in h3s the dangerouslySetInnerHTML thing there is used cause the summary and instructions is given as plain html with html tags, without it react would display it as it is with all the tags. IKR. 

the logic is also similar to the other ones. 
A useState to handle the fetching. A function for the actual fetching. The useSatate is set as an object.

```
const params = useParams();
Const [details, setDetails] = useState({});

Const fetchDetails = async () => {
	const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
	const detailsData = await data.json()
	setDetails(detailsData)
}

useEffect(() => {
	fetchDetails(params.name)
}, [params.name])
```
Here the params is the id of the particular recipe item, its set in each of the links on the different pages and components, the cuisine, searched, the popular, and veggies. So from any page you can dynamically navigate to the recipe details page. 
The image and the title is displayed from the api results like 

```
<div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
``` 
The whole page is wrapped in a detailwrapper styled with styled components the image and title as well as the info which contains the button and the actual instructions and ingredients are set to be side by find in a flex box.
