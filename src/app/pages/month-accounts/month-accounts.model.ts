export const column = [
    { field: 'isUpdate', header: '更動' },
    { field: 'name', header: '客戶' },
    { field: 'summary', header: '摘要' },
    { field: 'amount', header: '應收' },
    { field: 'collection', header: '收款' },
    { field: 'discount', header: '折讓' },
    { field: 'spillover', header: '溢收' },
    { field: 'state', header: '出貨狀態' },
    { field: 'way', header: '付款方式' },
    { field: 'pay', header: '支出' },
    { field: 'method', header: '支付方式' },
    { field: 'penny', header: '零用金' }
];



export interface IColumn {
    isUpdate: string;
    name: string;
    summary: string;
    amount: string;
    collection: string;
    discount: string;
    spillover: string;
    state: string;
    way: string;
    pay: string;
    method: string;
    penny: string;
}

export class Column implements IColumn {
    isUpdate: string = '';
    name: string = '';
    summary: string = '';
    amount: string = '';
    collection: string = '';
    discount: string = '';
    spillover: string = '';
    state: string = '';
    way: string = '';
    pay: string = '';
    method: string = '';
    penny: string = '';

}