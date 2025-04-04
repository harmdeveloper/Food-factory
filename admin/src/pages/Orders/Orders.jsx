/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// // /* eslint-disable react/prop-types */
// // /* eslint-disable react-hooks/exhaustive-deps */
// // /* eslint-disable no-unused-vars */
// // import React, { useState, useEffect, useRef } from 'react';
// // import "./Orders.css";
// // import { toast } from 'react-toastify';
// // import axios from 'axios';
// // import { assets } from '../../assets/assets';

// // const Orders = ({ url }) => {

// //   const [orders, setOrders] = useState([]);
// //   const [initialOrdersFetched, setInitialOrdersFetched] = useState(false); // New flag to track first load

// //   // const fetchAllOrders = async () => {
// //   //   try {
// //   //     const response = await axios.get(url + "/api/order/list");
// //   //     if (response.data.success) {
// //   //       const fetchedOrders = response.data.data;

// //   //       // Check if it's not the first time fetching the orders
// //   //       if (initialOrdersFetched) {
// //   //         const existingOrderIds = orders.map(order => order._id);
// //   //         const newOrderPlaced = fetchedOrders.some(order => !existingOrderIds.includes(order._id));

// //   //         // Trigger toast if a new order has been placed (if any order is new)
// //   //         if (newOrderPlaced) {
// //   //           toast.success("A new order has been placed!");
// //   //         }
// //   //       }

// //   //       // Update orders state
// //   //       setOrders(fetchedOrders);

// //   //       // Set the initialOrdersFetched flag to true after first data load
// //   //       if (!initialOrdersFetched) {
// //   //         setInitialOrdersFetched(true);
// //   //       }
// //   //     } else {
// //   //       toast.error("Error fetching orders");
// //   //     }
// //   //   } catch (error) {
// //   //     toast.error("Failed to fetch orders");
// //   //   }
// //   // };

// //   const fetchAllOrders = async () => {
// //     try {
// //       const response = await axios.get(url + "/api/order/list");
// //       if (response.data.success) {
// //         const fetchedOrders = response.data.data;
  
// //         // Compare the length of fetched orders with existing orders before updating state
// //         if (initialOrdersFetched) {
// //           if (fetchedOrders.length > orders.length) {
// //             toast.success("A new order has been placed!");
// //           }
// //         }
  
// //         // Update orders state
// //         setOrders(fetchedOrders);
  
// //         // Set the initialOrdersFetched flag to true after first data load
// //         if (!initialOrdersFetched) {
// //           setInitialOrdersFetched(true);
// //         }
// //       } else {
// //         toast.error("Error fetching orders");
// //       }
// //     } catch (error) {
// //       toast.error("Failed to fetch orders");
// //     }
// //   };

  
// //   useEffect(() => {
// //     fetchAllOrders();

// //     // Poll for new orders every 30 seconds
// //     const interval = setInterval(() => {
// //       fetchAllOrders();
// //     }, 30000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   // Function to update status
// //   const statusHandler = async (event, orderId) => {
// //     try {
// //       const response = await axios.post(url + "/api/order/status", {
// //         orderId,
// //         status: event.target.value
// //       });
// //       if (response.data.success) {
// //         await fetchAllOrders();
// //       } else {
// //         toast.error("Error updating order status");
// //       }
// //     } catch (error) {
// //       toast.error("Failed to update status");
// //     }
// //   };

// //   return (
// //     <div className="order add">
// //       <h3>Order Page</h3>
// //       <div className="orderList">
// //         {orders.map((order, index) => (
// //           <div key={index} className='order-item'>
// //             <img src={assets.parcel_icon} alt="" />
// //             <div>
// //               <p className='order-item-food'>
// //                 {order.items.map((item, idx) => (
// //                   <span key={idx}>
// //                     {item.name} x {item.quantity}{idx < order.items.length - 1 && ', '}
// //                   </span>
// //                 ))}
// //               </p>
// //               <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
// //               <p><b>Order-id:</b> {order.orderId}</p>
// //               <p><b>User-id:</b> {order.userId}</p>
// //               <div className="order-item-address">
// //                 <p>{order.address.street + ", "}</p>
// //                 <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
// //               </div>
// //               <p className='order-item-phone'>{order.address.phone}</p>
// //             </div>
// //             <p>Items: {order.items.length}</p>
// //             <p className='price'>Price: ${order.amount}</p>
// //             <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
// //               <option value="Food Processing">Food Processing</option>
// //               <option value="Out for Delivery">Out for Delivery</option>
// //               <option value="Delivered">Delivered</option>
// //             </select>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Orders;




import React, { useState, useEffect, useRef } from 'react';
import "./Orders.css";
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const prevOrdersLength = useRef(0); // Ref to store previous orders length

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        const fetchedOrders = response.data.data;

        // Compare fetched orders length with the previous length
        if (prevOrdersLength.current > 0 && fetchedOrders.length > prevOrdersLength.current) {
          toast.success("A new order has been placed!");
        }

        // Update the orders state with the fetched orders
        setOrders(fetchedOrders);

        // Update previous orders length to the new length
        prevOrdersLength.current = fetchedOrders.length;
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Failed to fetch orders");
    }
  };

  useEffect(() => {
    // Fetch orders when the component mounts
    fetchAllOrders();

    // Poll for new orders every 30 seconds
    const interval = setInterval(() => {
      fetchAllOrders();
    }, 30000);

    return () => clearInterval(interval);
  }, []); // Only run once when the component mounts

  // Function to update order status
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: event.target.value
      });
      if (response.data.success) {
        await fetchAllOrders(); // Fetch updated orders after status change
      } else {
        toast.error("Error updating order status");
      }
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="orderList">
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, idx) => (
                  <span key={idx}>
                    {item.name} x {item.quantity}{idx < order.items.length - 1 && ', '}
                  </span>
                ))}
              </p>
              <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
              <p><b>Order-id:</b> {order.orderId}</p>
              <p><b>User-id:</b> {order.userId}</p>
              <div className="order-item-address">
                <p>{order.address.street + ", "}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p className='price'>Price: ${order.amount}</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
