

//SpreadOperatpr is mostly used for copying or merging data


// This right here simplifies the way you give props 
// you already have to a component without listing each and everyone elements of the object  
function OrderList() {
    const order = {
        id: 1,
        username: "John Doe",
        item: 'Pizza Margarita',
        price: '$30.23'
    };
    return <Order {...order}/>
}