import type { NextApiRequest, NextApiResponse } from "next";

import { Task } from "../../types/Task";
import { DateTime } from "luxon";
import { UserModel } from "../../models/UserModel";
import { TaskModel } from "../../models/TaskModel";
import { connectToDB } from "../../middlewares/databases";
import { jwtValidator } from "../../middlewares/jwt";
import { DefaultMsgResponse } from "../../types/DefaultMsgResponse";

const handler = async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse | object>) => {
  try {
    const userId = req.body?.userId || req.query.userId;
    const failedValidation = await validateUser(userId);
    if (failedValidation) {
      return res.status(400).json({ error: failedValidation });
    }

    switch (req.method) {
      case "GET":
        return await getTasks(req, res, userId);
      case "POST":
        return await saveTask(req, res, userId);
      case "PUT":
        return await updateTask(req, res, userId);
      case "DELETE":
        return await deleteTask(req, res, userId);
      default:
        return res.status(405).json({ error: "O método HTTP informado não existe" });
    }

    //
  } catch (e: any) {
    console.log("Ocorreu um erro ao utilizar o caminho de tarefas:", e);
    res.status(500).json({
      error: "Ocorreu um erro ao utilizar o caminho de tarefas. Tente novamente.",
    });
  }
};

const validateUser = async (userId: string) => {
  if (!userId) {
    return "Usuario nao informado";
  }

  const userFound = await UserModel.findById(userId);
  if (!userFound) {
    return "Usuario nao encontrado";
  }
};

const getTasks = async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse | object>, userId: string) => {
  const result = await TaskModel.find({ userId });
  res.status(200).json(result);
};

const saveTask = async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>, userId: string) => {
  if (req.body) {
    const task = req.body as Task;
    if (!task.name || task.name.length < 2) {
      return res.status(400).json({ error: "Nome da tarefa invalida" });
    }

    if (!task.finishPrevisionDate || DateTime.fromISO(task.finishPrevisionDate) < DateTime.now()) {
      return res.status(400).json({ error: "Data de previsao invalida ou menor que hoje" });
    }

    const final = {
      ...task,
      userId,
      finishDate: undefined,
    } as any;

    await TaskModel.create(final);
    return res.status(200).json({ message: "Tarefa criada com sucesso" });
  }

  return res.status(400).json({ error: "Parametros de entrada invalido" });
};

const validateTaskAndReturnValue = async (req: NextApiRequest, userId: string) => {
  const id = req.query?.id as string;

  if (!id || id.trim() === "") {
    return null;
  }

  const taskFound = await TaskModel.findById(id);
  if (!taskFound || taskFound.userId !== userId) {
    return null;
  }

  return taskFound;
};

const updateTask = async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse | Task[]>, userId: string) => {
  const taskFound = await validateTaskAndReturnValue(req, userId);
  if (!taskFound) {
    return res.status(400).json({ error: "Tarefa nao encontrada" });
  }

  if (req.body) {
    const task = req.body as Task;

    if (task.name && task.name.trim() !== "") {
      taskFound.name = task.name;
    }

    if (task.finishPrevisionDate) {
      taskFound.finishPrevisionDate = task.finishPrevisionDate;
    }

    if (task.finishDate) {
      taskFound.finishDate = task.finishDate;
    }

    await TaskModel.findByIdAndUpdate({ _id: taskFound._id }, taskFound);
    return res.status(200).json({ message: "Tarefa atualizada com sucesso" });
  }

  return res.status(400).json({ error: "Parametro de entrada invalidos" });
};

const deleteTask = async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse | Task[]>, userId: string) => {
  const taskFound = await validateTaskAndReturnValue(req, userId);
  if (!taskFound) {
    return res.status(400).json({ error: "Tarefa nao encontrada" });
  }

  await TaskModel.findByIdAndDelete({ _id: taskFound._id });
  return res.status(200).json({ message: "Tarefa deletada com sucesso" });
};

export default connectToDB(jwtValidator(handler));
