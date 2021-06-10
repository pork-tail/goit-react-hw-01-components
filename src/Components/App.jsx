import React from "react";
import data from "../data";
import FriendList from "./friend/friendList/FriendList";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import TransactionHistory from "./transaction/TransactionHistory";

const App = () => {
  return (
    <>
      <h2>Profile</h2>
      <Profile
        name={data.user.name}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats}
      />
      <h2>Statistics</h2>
      <Statistics stats={data.statisticalData} title="Upload stats" />
      <h2>Friend</h2>
      <FriendList friends={data.friends} />
      <h2>Transaction History</h2>
      <TransactionHistory items={data.transactions} />
    </>
  );
};
export default App;
