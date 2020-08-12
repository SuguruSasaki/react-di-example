import { IDependency, IPayload } from "pure-di";
import Factory from "pure-di/dist/factory";
import Project from "./components/pages/Project";
import useCounter from "./hooks/useCounter";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import useGithubService from "./hooks/useGithub";

type CreateComponent = () => JSX.Element;

class CompositionRoot {
  private _dependency: IDependency;
  private _payload: IPayload;

  private constructor(dependency: IDependency, payload: IPayload) {
    this._dependency = dependency;
    this._payload = payload;
  }

  static resolve(): CompositionRoot {
    const dependency: IDependency = {};
    const payload: IPayload = {};
    return new CompositionRoot(dependency, payload);
  }

  FactoryProjectPage(): CreateComponent {
    const dependency: () => IDependency = () => ({ hooks: useCounter, service: useGithubService });
    const factory = new Factory<typeof Project>(dependency);
    return () => factory.createJsx(Project);
  }

  FactoryAboutPage(): CreateComponent {
    const dependency: () => IDependency = () => ({});
    const factory = new Factory<typeof About>(dependency);
    return () => factory.createJsx(About);
  }

  FactoryContactPage(): CreateComponent {
    const dependency: () => IDependency = () => ({});
    const factory = new Factory<typeof Contact>(dependency);
    return () => factory.createJsx(Contact);
  }
}

export default CompositionRoot;
