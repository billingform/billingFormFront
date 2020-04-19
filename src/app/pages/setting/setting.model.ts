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

export const ColsTab1 = [
    { field: 'companyId', header: '公司行號' },
    { field: 'name', header: '公司名稱' },
    { field: 'remark', header: '備註' },
];

export const ColTab1 = ['companyId', 'name', 'remark'];

export interface ColsTab1Companies{
    companyId: string;
    name: string;
    remark: string;
    isUpdate: boolean;
}
