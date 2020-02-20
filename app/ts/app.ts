import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

$('.form').submit(controller.adiciona.bind(controller));
$('#import-button').click(controller.importaDados.bind(controller));