import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";

const createTagSchema = z.object({
  nome: z.string().min(3, { message: "minimo 3 caracteres" }),
  identificador: z.string(),
});

type CreateTagSchema = z.infer<typeof createTagSchema>;

export function CreateTagForm() {
  const { register, handleSubmit } = useForm<CreateTagSchema>({
    resolver: zodResolver(createTagSchema),
  });

  function createTag(data: CreateTagSchema) {
    console.log("data", data);
  }

  return (
    <form onSubmit={handleSubmit(createTag)} className="w-full space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="nome">
          Nome Tag
        </label>
        <input
          className="border border-zinc-800 rounded px-3 py-2.5 text-sm bg-zinc-800/50 w-full"
          id="nome"
          type="text"
          {...register("nome")}
        />
      </div>
      <div className="space-y-2">
        <label className="font-medium block text-sm" htmlFor="identificador">
          Identificador Tag
        </label>
        <input
          className="border border-zinc-800 rounded px-3 py-2.5 text-sm bg-zinc-800/50 w-full"
          id="identificador"
          type="text"
          {...register("identificador")}
          readOnly
        />
      </div>
      <div className="flex items-center justify-end gap-2">
        <Dialog.Close asChild>
          <Button>
            <X className="size-3" />
            Cancelar
          </Button>
        </Dialog.Close>
        <Button className="bg-teal-400 text-teal-950" type="submit">
          <Check className="size-3" />
          Salvar
        </Button>
      </div>
    </form>
  );
}
