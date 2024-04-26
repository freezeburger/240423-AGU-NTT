import { Observable } from "rxjs";

/**
 * Un service réactif (https://en.wikipedia.org/wiki/Reactive_programming)
 *
 * Expose ses donnése sous un stream observable. (Observe Pattern)
 * Accept des commandes via une méthodes "process"
 *
 * Toutes ses autres méthodes doivent être des impleémention interne.
 */
export interface ReactiveService<DataType, CommandType> {
  /**
   * $ relative to observables.
   */
  data$: Observable<DataType>;
  process(command: { type: CommandType, payload: unknown }): void;
}
