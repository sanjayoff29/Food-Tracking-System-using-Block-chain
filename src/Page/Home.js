import React,{useState} from "react";
import {Button,Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { contract } from "./connector";

function Home() {
  const [handleId, sethandleId] = useState("");
  const [productName, setproductName] = useState("");
  const [origin, setorigin] = useState("");
  const [Id, setId] = useState("");
  const [verifyFood, setverifyFood] = useState("");
  const [verifyFoodDetails, setverifyFoodDetails] = useState("");
  const [Wallet, setWallet] = useState("");
  

  const handleItemID = (e) => {
    sethandleId(e.target.value)
  }

  const handleProductName = (e) => {
    setproductName(e.target.value)
  }

  const handleOrigin = (e) => {
    setorigin(e.target.value)
  }

  const handleSendFood = async () => {
    try {
      let tx = await contract.sendFoodItem(handleId, productName, origin)
      let txWait = await tx.wait()
      console.log(txWait);

      alert(txWait.transactionHash)
    } catch (error) {
      alert(error)
    }
  }

  const handleVerifyId = async (e) => {
    setId(e.target.value)
  }

  const handleVerifyFood = async () => {
    try {
      let tx = await contract.verifyFoodItem(Id.toString())
      let txWait = await tx.wait()
      console.log(txWait);
      alert(txWait.transactionHash)
    } catch (error) {
      alert(error)
    }

  }

  const handleConsume = async () => {
    try {
      let tx = await contract.consumeFoodItem(Id.toString())
      let txWait = await tx.wait()
      console.log(txWait);
      alert(txWait.transactionHash)
    } catch (error) {
      alert(error)
    }

  }

  const handleFoodItemsDeatils = async()=> {
    try {
      let tx = await contract.getFoodItemDetails(Id)
      let arr = []
      tx.map(e => arr.push(e))
      
      setverifyFoodDetails(arr)
      // alert(tx)
    } catch (error) {
      alert(error)
    }
  }


  const handleWallet = async () => {
    if (!window.ethereum) {
      return alert('please install metamask');
    }

    const addr = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setWallet(addr[0])

  }

  return (
  <div>
   <h1 style={{marginTop:"30px", marginBottom:"80px"}}>Food Tracking Using Blockchain</h1>

      {!Wallet ?

        <Button onClick={handleWallet} style={{ marginTop: "30px", marginBottom: "50px" }}>Connect Wallet </Button>
        :
        <p style={{ width: "250px", height: "50px", margin: "auto", marginBottom: "50px", border: '2px solid #2096f3' }}>{Wallet.slice(0, 6)}....{Wallet.slice(-6)}</p>
      }
      <Container style={{ display: "flex",}}>
      
      <Row style={{marginBottom:"100px",margin:"auto"}}>
      <Col >
       <div>
          <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleItemID} type="string" placeholder="Enter Item" value={handleId} /> <br />
             
          <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleProductName} type="string" placeholder="Enter Product Name" value={productName} /> <br />  
              
          <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleOrigin} type="string" placeholder="Enter Origin" value={origin} /><br />
          <Button onClick={handleSendFood} style={{ marginTop: "10px" }} variant="primary">send Food Item</Button>
       </div>
      </Col>

      <Col >
       <div>
            <input style={{ marginTop: "100px", borderRadius: "5px" }} onChange={handleVerifyId} type="string" placeholder="Enter Id" value={Id} /> <br />
            <Button onClick={handleVerifyFood} style={{ marginTop: "10px" }} variant="primary">Verify Food Item</Button>
       </div>
      </Col>
     </Row>
        
        
        
        <Row style={{marginTop:"100px"}}>
          <Col>
            <div>            
              <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleVerifyId} type="string" placeholder="Enter Item Id" value={Id} /> <br />
              <Button onClick={handleConsume} style={{ marginTop: "10px" }} variant="primary">Consume Food Item</Button>
            </div>
          </Col>
          
          <Col>
            <div>
              
              <input style={{ marginTop: "100px", borderRadius: "5px" }} onChange={handleVerifyId} type="number" placeholder="Enter Item Id" value={Id} /> <br />
              <Button onClick={handleFoodItemsDeatils} style={{ marginTop: "10px" }} variant="primary">Food Item Details</Button>
              <p>{verifyFoodDetails.toString()}</p>
            </div>
          </Col>
        </Row>
    </Container>
    
  </div>
  )
}

export default Home;
