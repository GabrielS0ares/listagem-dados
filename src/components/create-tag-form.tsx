import { Check, X } from "lucide-react";
import { Button } from "./ui/button";

export function CreateTagForm() {
  return (
    <form className="w-full space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="nome">
          Nome Tag
        </label>
        <input className="border border-zinc-800 rounded px-3 py-2.5 text-sm bg-zinc-800/50 w-full" id="nome" type="text" />
      </div>
      <div className="space-y-2">
        <label className="font-medium block text-sm" htmlFor="identificador">
          Identificador Tag
        </label>
        <input className="border border-zinc-800 rounded px-3 py-2.5 text-sm bg-zinc-800/50 w-full" id="identificador" type="text" readOnly />
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button>
          <X className="size-3" />
          Cancelar
        </Button>
        <Button className="bg-teal-400 text-teal-950" type="submit">
          <Check className="size-3" />
          Salvar
        </Button>
      </div>
    </form>
  );
}
