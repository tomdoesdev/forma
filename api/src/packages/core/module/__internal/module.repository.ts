import { nanoid } from "nanoid";

type $DB_Module = {title: string}

const modules: Map<string, $DB_Module> = new Map<string,$DB_Module>();


export class ModuleRepository {
    createModule(module:{title:string}) {
        const id = nanoid();
        modules.set(id,module)
        return id;
    }

    getModuleById(id: string){
        return modules.get(id)
    }
}