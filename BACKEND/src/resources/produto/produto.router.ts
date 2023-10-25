import { Router } from 'express';
import produtoController from './produto.controller';

const router = Router();
// Produto controller
router.get('/', produtoController.index); // os produtos no banco
router.post('/', produtoController.create);//criar um produto na tabela
router.get('/:id', produtoController.read);// lê dados de um produto especifico
router.put('/:id', produtoController.update);//atualizar os dados de um produto especifico
router.delete('/:id', produtoController.remove);//remove um produto espe

export default router;