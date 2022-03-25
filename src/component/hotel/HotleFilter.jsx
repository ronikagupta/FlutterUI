import React from 'react'

export default function HotleFilter() {
  return (
    <aside className="hotel-filter">
    <div className="filter">
    <h2>Suggested For You in Delhi</h2>
<ul>
        <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>Free Cancellation, Zero Payment Now</label>
            </span>
    </li>
    <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>Pay at Hotel</label>
            </span>
    </li>
    <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>Free consultation</label>
            </span>
    </li>
    <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>Free Chat</label>
            </span>
    </li>
        </ul>    </div>
        <div className="filter">
    <h2>Price</h2>
        <ul>
            <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>₹ 0 - ₹ 999</label>
            </span>
    </li>
            <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>₹ 1000 - ₹ 1999</label>
            </span>
    </li>
            <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>₹ 1999 - ₹ 2999</label>
            </span>
    </li>
            <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>₹ 2999 - ₹ 3999</label>
            </span>
    </li>
            <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>₹ 3999 - ₹ 4999</label>
            </span>
    </li>
            </ul>
    </div>
         <div className="filter">
    <h2>Star Category</h2>
        <ul>
            <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>Other</label>
            </span>
    </li>
            <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>5 Star</label>
            </span>
    </li>
            <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>3 Star</label>
            </span>
    </li>

            </ul>
    </div>
        <div className="filter">
    <h2>Facility</h2>
        <ul>
            <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>Wi-Fi</label>
            </span>
    </li>
            <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>Spa</label>
            </span>
    </li>
            <li>
            <span data-testid="checkboxFilter" className=" checkmarkOuter fadeEff">
                <input type="checkbox"/><label>Swimming Pool</label>
            </span>
    </li>

            </ul>
    </div>
    </aside>

  )
}
