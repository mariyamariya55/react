import logo from './logo.svg';
import './App.css';
import Basic from './Training/Basic';
import Operator from './Task/Operator';
import Number from './Task/Number';
import UseStateHook from './Training/UseStateHook';
import UseStateHook1 from './Task/Celcius';
import Fact from './Task/Fact';
import Grand from './Task/Grand';
import Letter from './Task/Letter';
import Captial from './Task/Captial';
import WordCounter from './Task/Letter';
import Second from './Task/Second';
import capitalizeWords from './Task/Second';
import Upper from './Task/Second';
import Math from './Task/Math';
import Final from './Task/Final';
import Check from './Task/Check';
import Generate from './Task/Generate';
import Factors from './Task/Factors';
import ReactProps from './Training/ReactProps';
import Text from './Task/Text';
import Sign from './Task/Sign';
import FormExample from './Training/FormExample';
import Login from './Task/Login';
import MouseEvents from './Training/MouseEvents';
import KeyboardEvents from './Training/KeyboardEvents';
import Mouse from './Task/Mouse';
import Key from './Task/Key';
import Brows from './brows';
import Search from './Task/Search';
import Color from './Task/Color';
import Set from './Task/Set';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactRouter from './Training/ReactRouter';

import Nav from './Nav';
import NNN from './Task/NNN';
import UseNavigateHook from './Training/UseNavigateHook';
import UseLocationHook from './Training/UseLocationHook';
import Form from './Task/Form';
import Home from './Task/Home';
// import DialogueBoxes from './Training/DialogueBoxes';
import Dial from './Task/Dial';
import Input from './Task/input';
import Gen from './Task/Gen';
import Array from './Task/Array';
import Emailval from './Task/Emailval';
import Agecalculator from './Task/Agecalculator';
import Wordcount from './Task/Wordcount';
import Ipadress from './Task/Ipadress';
import CookiesExample from './Training/CookiesExample';
import Cook from './Task/Cook';
import FormValidation from './Training/FormValidation';
import Validation from './Task/Validation';
import ErrorHandling from './Training/ErrorHandling';
import Errorhandle from './Task/Errorhandle';
import Errohandlre from './Task/Errorhandle';
import UseEffectHook from './Training/UseEffectHook';
import Count from './Training/Count';

import Time from './Task/Time';
import ApiFetching from './Training/ApiFetching';
import Api from './Ecommece/Api';
import UseContextHook from './Training/UseContextHook';
import UseContext from './Task/UseContext ';
import Usetask from './Task/Usetask';
import UseReducer from './Training/UseReducer';
import Usereducetask from './Task/Usereducetask';
import Userreduce2 from './Task/Userreduce2';
import DataTableExmple from './Training/DataTableExmple';
import Datatable from './Task/Datatable';
import Tasktable from './Task/Tasktable';
import TableForm from './Task/TableForm';
import NewApi from './Task/NewApi';
import Wheather from './Task/Wheather';
import LoginPage from './Ecommece/LoginPage';




function App() {
  
  return (
    <div className="App">
     {/* <h1>react library</h1> */}
    {/* <Basic />
   <Operator />
   <Number /> */}
     {/* <UseStateHook />
   <UseStateHook1 />
   <Fact/>
   <Grand />
   <Captial />
   <WordCounter />
  <Upper />
  <Math /> 
  // <Final/>

  <Check /> 
   <Generate />
  <Factors /> 
 
  <NNN /> */}

  
  

  <BrowserRouter>
    <Routes>
      <Route path='/ReactRouter' element={<ReactRouter />}></Route>
      <Route path='/FormExample' element={<FormExample />}></Route>
      <Route path='/Color' element={<Color />}></Route>
      <Route path='/MouseEvents' element={<MouseEvents />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Key' element={<Key />}></Route>
      <Route path='/Mouse' element={<Mouse />}></Route>
      <Route path='/text' element={<Text />}></Route>
      <Route path='/Search' element={<Search />}></Route>
      <Route path='/Math' element={<Math />}></Route>
      <Route path='/Captial' element={<Captial />}></Route>
      <Route path='/wordcounter' element={<WordCounter />}></Route>
      <Route path='/check' element={<Check />}></Route>
      <Route path='/Grand' element={<Grand />}></Route>
      <Route path='/generate' element={<Generate />}></Route>
      <Route path='/Upper' element={<Upper />}></Route>
      <Route path='/UseSateHook1' element={<UseStateHook1 />}></Route>
      <Route path='/NNN' element={<NNN />}></Route>
      <Route path='/Operator' element={<Operator />}></Route>      
      <Route path='/UseNavigateHook' element={<UseNavigateHook />}></Route>
      <Route path='/UseLocationHook' element={<UseLocationHook />}></Route> 
      <Route path='/Form' element={<Form />}></Route>
      <Route path='/Home' element={<Home />}></Route>
      {/* <Route path='/DialogueBoxes' element={<DialogueBoxes />}></Route> */}
      <Route path='/Dial' element={<Dial />}></Route>
      <Route path='/Input'element={<Input />}></Route>
      <Route path='/Gen' element={<Gen />}></Route>
      <Route path='/Array' element={<Array />}></Route>
      <Route path='/Emailval' element={<Emailval />}></Route>
      <Route path='/AgeCalculator' element={<Agecalculator />}></Route>
      <Route path='/Wordcount' element={<Wordcount />}></Route>
      <Route path='/Ipadress' element={<Ipadress />}></Route>
      <Route path='/CookiesExample' element={<CookiesExample />}></Route>
     <Route path='/Cook'element={<Cook />}></Route>
     <Route path='/FormValidation'element={<FormValidation />}></Route>
     <Route path='/Validation' element={<Validation />}></Route>
     <Route path='/ErrorHandling' element={<ErrorHandling />}></Route>
     <Route path='/Errorhandle' element={<Errohandlre />}></Route>
     <Route path='/UseEffectHook' element={<UseEffectHook />}></Route>
     <Route path='/Count' element={<Count />}></Route>
     <Route path='/Time' element={<Time/>}></Route>
     <Route path='/ApiFetching' element={<ApiFetching/>}></Route>
     <Route path='/Api' element={<Api />}></Route>
     <Route path='/UseContextHook' element={<UseContextHook />}></Route>
     <Route path='/UseContext' element={<UseContext />}></Route>
     <Route path='/Usetask' element={<Usetask />}></Route>
     <Route path='/UseReducer' element={<UseReducer />}></Route>
     <Route path='/Usereducetask' element={<Usereducetask />}></Route>
     <Route path='/Userreducetask2' element={<Userreduce2 />}></Route>
     <Route path='/DataTableExmple' element={<DataTableExmple />}></Route>
     <Route path='/Datatable' element={<Datatable />}></Route>
     <Route path='/Tasktable' element={<Tasktable />}></Route>
     <Route path='/Tableform' element={<TableForm />}></Route>
     <Route path='/NewApi' element={<NewApi />}></Route>
     <Route path='/Wheather' element={<Wheather />}></Route>
     <Route path='/' element={<LoginPage />}></Route>

    </Routes>
  </BrowserRouter>
  
   
    </div>
  );
}


export default App;
