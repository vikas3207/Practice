
import './App.css';
import Card from './Component/Card';

function App() {
  const productDetailsOne={
    productId : '#003',
    productPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSE-GlI7T1UJH1s3a0aLw2k8ipe9JBJ74OEhkMfZY0wQ&usqp=CAU&ec=48665699',
    productName : 'T-Shirt',
    Brand : 'Max-Fashion',
    productDescription : 'T-shirt has nice built quality. Undoubtedly go for it!! Perfect and quality product.',
    Price : '$65',
    Rating :'4.5' 
 
  }
  const productDetailsTwo={
    productId : '#2342',
    productPic : 'https://www.transparentpng.com/thumb/perfume/KvzkyF-roberto-cavalli-perfume-picture.png',
    productName : 'Perfume',
    Brand : 'Blackberry',
    productDescription : 'Perfume has nice fragnance. Undoubtedly go for it!! Perfect and quality product.',
    Price : '$85',
    Rating :'4.2' 
 
  }
  const productDetailsThree={
    productId : '#4334',
    productPic : 'https://static.vecteezy.com/system/resources/thumbnails/014/586/017/small/plain-black-wireless-headphones-free-png.png',
    productName : 'Headphone',
    Brand : 'Boat',
    productDescription : 'This Headphone has nice sound quality.Go for it!! Perfect and quality product.',
    Price : '$75',
    Rating :'4.0' 
 
  }
  const productDetailsFour={
    productId : '#3434',
    productPic : 'https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png',
    productName : 'Sweat t-Shirt',
    Brand : 'Indiano',
    productDescription : 'Shoes built quality. Undoubtedly go for it!! Perfect and quality product.',
    Price : '$64',
    Rating :'4.4' 
 
  }
  const productDetailsFive={
    productId : '#23333',
    productPic : 'https://www.befunky.com/images/wp/wp-2017-09-Background-Tool-9.png?auto=avif,webp&format=jpg&width=944',
    productName : 'Watch',
    Brand : 'Future-Choice',
    productDescription : 'Nice built quality. Undoubtedly go for it!! Perfect and quality product.',
    Price : '$60',
    Rating :'4.3' 
 
  }
  function BtnFunctionOne(){
    alert('Product of is '+ productDetailsOne.productId + ', which is '+ productDetailsOne.productName+ ' of brand '+ productDetailsOne.Brand+' has of rupees ' +productDetailsOne.Price+' is added in the cart , please proceed to pay !!!')
  }
  function BtnFunctionTwo(){
    alert('Product of is '+ productDetailsTwo.productId + ', which is '+ productDetailsTwo.productName+ ' of brand '+ productDetailsTwo.Brand+' has of rupees ' +productDetailsTwo.Price+' is added in the cart , please proceed to pay !!!')
  }
  function BtnFunctionThree(){
    alert('Product of is '+ productDetailsThree.productId + ', which is '+ productDetailsThree.productName+ ' of brand '+ productDetailsThree.Brand+' has of rupees ' +productDetailsThree.Price+' is added in the cart , please proceed to pay !!!')
  }
  function BtnFunctionFour(){
    alert('Product of is '+ productDetailsFour.productId + ', which is '+ productDetailsFour.productName+ ' of brand '+ productDetailsFour.Brand+' has of rupees ' +productDetailsFour.Price+' is added in the cart , please proceed to pay !!!')
  }
  function BtnFunctionFive(){
    alert('Product of is '+ productDetailsFive.productId + ', which is '+ productDetailsFive.productName+ ' of brand '+ productDetailsFive.Brand+' has of rupees ' +productDetailsFive.Price+' is added in the cart , please proceed to pay !!!')
  }
  return (
    <div className="App">
          <div className='main-div'>
        <Card details = {productDetailsOne} btnFunction={BtnFunctionOne} />
        <Card details={productDetailsTwo} btnFunction={BtnFunctionTwo} />
        <Card details={productDetailsThree} btnFunction={BtnFunctionThree} />
        <Card details={productDetailsFour} btnFunction={BtnFunctionFour} />
        <Card details={productDetailsFive} btnFunction={BtnFunctionFive} />
        </div>
    </div>
  );
}

export default App;
