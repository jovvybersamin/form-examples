import React, { Fragment } from 'react';
import { NumberUtils } from '@react-force/number-utils';
import { Order, OrderItem } from '../../models';

export interface OrderSummaryProps {
    order: Order;
}

export const OrderSummary = ({ order }: OrderSummaryProps) => {
    const { orderItems, shippingCharges } = order;
    const orderTotal = Order.getOrderTotal(order).orderTotal;
    const shippingChargesStr = NumberUtils.formatAsMoney(shippingCharges);
    const orderTotalStr = NumberUtils.formatAsMoney(orderTotal);

    return (
        <Fragment>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Order Summary</span>
                <span className="badge badge-secondary badge-pill">
                    {orderItems.length}
                </span>
            </h4>
            <ul className="list-group mb-3">
                {orderItems.map((orderItem) => (
                    <li
                        key={orderItem.item.id}
                        className="list-group-item d-flex justify-content-between lh-condensed"
                    >
                        <div>
                            <h6 className="my-0">{orderItem.item.name}</h6>
                            <small className="text-muted">
                                Quantity: {orderItem.qty}
                            </small>
                        </div>
                        <span className="text-muted">
                            $
                            {NumberUtils.formatAsMoney(
                                OrderItem.getTotal(orderItem)
                            )}
                        </span>
                    </li>
                ))}
                <li className="list-group-item">
                    <div className="d-flex justify-content-between">
                        <span>Items</span>
                        <strong>$960.00</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Shipping & handling</span>
                        <strong>${shippingChargesStr}</strong>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between text-primary">
                    <span>Order total</span>
                    <strong>${orderTotalStr}</strong>
                </li>
            </ul>
        </Fragment>
    );
};