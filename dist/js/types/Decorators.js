export function ValidaDebito(target, propertykey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDebito) {
        if (valorDoDebito <= 0) {
            throw new Error("O valor a ser debitado precisa ser maior que zero!");
        }
        if (valorDoDebito > this.saldo) {
            throw new Error("Seu saldo é insulficiente para realizar a operação!");
        }
        return originalMethod.apply(this, [valorDoDebito]);
    };
    return descriptor;
}
export function ValidaDeposito(target, propertykey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (ValorDoDeposito) {
        if (ValorDoDeposito <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
        return originalMethod.apply(this, [ValorDoDeposito]);
    };
    return descriptor;
}
