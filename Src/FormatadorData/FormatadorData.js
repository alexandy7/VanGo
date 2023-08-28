

const hoje = new Date(); // Pegando o dia de hoje 

export default function FormatadorData(DataComponente) {

    const dataNotificacao = new Date(DataComponente);
    const diaAnterior = hoje.getDate() - 1;

    // Verifica se o dia da notificação é o mesmo dia de hoje (Compara dia, mês e ano)
    const mesmoDia = dataNotificacao.getDate() === hoje.getDate() &&
        dataNotificacao.getMonth() === hoje.getMonth() &&
        dataNotificacao.getFullYear() === hoje.getFullYear();

    //Verifica se a notificação foi ontem 
    const ontem = dataNotificacao.getDate() === diaAnterior &&
        dataNotificacao.getMonth() === hoje.getMonth() &&
        dataNotificacao.getFullYear() === hoje.getFullYear();

    let horaOuData;

    if (mesmoDia) {
        // Caso seja o mesmo dia, mostra somente as horas
        horaOuData = dataNotificacao.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        return horaOuData;
    }
    else if (ontem) {

        //Caso seja true, exibi "ontem" como data
        horaOuData = "Ontem"
        return horaOuData;
    }
    else {
        // Caso seja diferente, mostra a data completa
        horaOuData = dataNotificacao.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        return horaOuData;
    }
}