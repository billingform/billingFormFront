export const ColsTab0 = [
    { field: 'isUpdate', header: '更動' },
    { field: 'name', header: '項目' },
    { field: 'unit', header: '單位' },
    { field: 'amount', header: '金額' },
    { field: 'remark', header: '備註' }
];

export const ColTab0 = ['isUpdate', 'name', 'unit', 'amount', 'remark'];

export interface ColsTab0Items {
    name: string;
    unit: string;
    amount: number;
    remark: string;
    isUpdate: boolean;
}
