import React from 'react'

export default function SideFilter() {
  return (
    <aside className="hotel-filter">

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

</aside>

  )
}
