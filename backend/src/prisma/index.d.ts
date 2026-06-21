
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model producto
 * 
 */
export type producto = $Result.DefaultSelection<Prisma.$productoPayload>
/**
 * Model carrito
 * 
 */
export type carrito = $Result.DefaultSelection<Prisma.$carritoPayload>
/**
 * Model carritoItem
 * 
 */
export type carritoItem = $Result.DefaultSelection<Prisma.$carritoItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Productos
 * const productos = await prisma.producto.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Productos
   * const productos = await prisma.producto.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.producto`: Exposes CRUD operations for the **producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.productoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrito`: Exposes CRUD operations for the **carrito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carritos
    * const carritos = await prisma.carrito.findMany()
    * ```
    */
  get carrito(): Prisma.carritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carritoItem`: Exposes CRUD operations for the **carritoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarritoItems
    * const carritoItems = await prisma.carritoItem.findMany()
    * ```
    */
  get carritoItem(): Prisma.carritoItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    producto: 'producto',
    carrito: 'carrito',
    carritoItem: 'carritoItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "producto" | "carrito" | "carritoItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      producto: {
        payload: Prisma.$productoPayload<ExtArgs>
        fields: Prisma.productoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          findFirst: {
            args: Prisma.productoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          findMany: {
            args: Prisma.productoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>[]
          }
          create: {
            args: Prisma.productoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          createMany: {
            args: Prisma.productoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          update: {
            args: Prisma.productoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          deleteMany: {
            args: Prisma.productoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.productoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.productoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      carrito: {
        payload: Prisma.$carritoPayload<ExtArgs>
        fields: Prisma.carritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoPayload>
          }
          findFirst: {
            args: Prisma.carritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoPayload>
          }
          findMany: {
            args: Prisma.carritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoPayload>[]
          }
          create: {
            args: Prisma.carritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoPayload>
          }
          createMany: {
            args: Prisma.carritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.carritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoPayload>
          }
          update: {
            args: Prisma.carritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoPayload>
          }
          deleteMany: {
            args: Prisma.carritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.carritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoPayload>
          }
          aggregate: {
            args: Prisma.CarritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrito>
          }
          groupBy: {
            args: Prisma.carritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.carritoCountArgs<ExtArgs>
            result: $Utils.Optional<CarritoCountAggregateOutputType> | number
          }
        }
      }
      carritoItem: {
        payload: Prisma.$carritoItemPayload<ExtArgs>
        fields: Prisma.carritoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carritoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carritoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoItemPayload>
          }
          findFirst: {
            args: Prisma.carritoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carritoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoItemPayload>
          }
          findMany: {
            args: Prisma.carritoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoItemPayload>[]
          }
          create: {
            args: Prisma.carritoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoItemPayload>
          }
          createMany: {
            args: Prisma.carritoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.carritoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoItemPayload>
          }
          update: {
            args: Prisma.carritoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoItemPayload>
          }
          deleteMany: {
            args: Prisma.carritoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carritoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.carritoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carritoItemPayload>
          }
          aggregate: {
            args: Prisma.CarritoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarritoItem>
          }
          groupBy: {
            args: Prisma.carritoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarritoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.carritoItemCountArgs<ExtArgs>
            result: $Utils.Optional<CarritoItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    producto?: productoOmit
    carrito?: carritoOmit
    carritoItem?: carritoItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    itemsCarrito: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemsCarrito?: boolean | ProductoCountOutputTypeCountItemsCarritoArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountItemsCarritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carritoItemWhereInput
  }


  /**
   * Count Type CarritoCountOutputType
   */

  export type CarritoCountOutputType = {
    items: number
  }

  export type CarritoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CarritoCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CarritoCountOutputType without action
   */
  export type CarritoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoCountOutputType
     */
    select?: CarritoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarritoCountOutputType without action
   */
  export type CarritoCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carritoItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    precio: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    precio: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    clasificacion: string | null
    precio: number | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    clasificacion: string | null
    precio: number | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    clasificacion: number
    precio: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    precio?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    precio?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    clasificacion?: true
    precio?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    clasificacion?: true
    precio?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    clasificacion?: true
    precio?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which producto to aggregate.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type productoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productoWhereInput
    orderBy?: productoOrderByWithAggregationInput | productoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: productoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    clasificacion: string
    precio: number
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends productoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type productoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    clasificacion?: boolean
    precio?: boolean
    itemsCarrito?: boolean | producto$itemsCarritoArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>



  export type productoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    clasificacion?: boolean
    precio?: boolean
  }

  export type productoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "clasificacion" | "precio", ExtArgs["result"]["producto"]>
  export type productoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemsCarrito?: boolean | producto$itemsCarritoArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "producto"
    objects: {
      itemsCarrito: Prisma.$carritoItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      clasificacion: string
      precio: number
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type productoGetPayload<S extends boolean | null | undefined | productoDefaultArgs> = $Result.GetResult<Prisma.$productoPayload, S>

  type productoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface productoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['producto'], meta: { name: 'producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {productoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productoFindUniqueArgs>(args: SelectSubset<T, productoFindUniqueArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productoFindUniqueOrThrowArgs>(args: SelectSubset<T, productoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productoFindFirstArgs>(args?: SelectSubset<T, productoFindFirstArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productoFindFirstOrThrowArgs>(args?: SelectSubset<T, productoFindFirstOrThrowArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productoFindManyArgs>(args?: SelectSubset<T, productoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {productoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends productoCreateArgs>(args: SelectSubset<T, productoCreateArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {productoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productoCreateManyArgs>(args?: SelectSubset<T, productoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {productoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends productoDeleteArgs>(args: SelectSubset<T, productoDeleteArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {productoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productoUpdateArgs>(args: SelectSubset<T, productoUpdateArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {productoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productoDeleteManyArgs>(args?: SelectSubset<T, productoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productoUpdateManyArgs>(args: SelectSubset<T, productoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {productoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends productoUpsertArgs>(args: SelectSubset<T, productoUpsertArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productoCountArgs>(
      args?: Subset<T, productoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productoGroupByArgs['orderBy'] }
        : { orderBy?: productoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the producto model
   */
  readonly fields: productoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itemsCarrito<T extends producto$itemsCarritoArgs<ExtArgs> = {}>(args?: Subset<T, producto$itemsCarritoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carritoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the producto model
   */
  interface productoFieldRefs {
    readonly id: FieldRef<"producto", 'Int'>
    readonly nombre: FieldRef<"producto", 'String'>
    readonly descripcion: FieldRef<"producto", 'String'>
    readonly clasificacion: FieldRef<"producto", 'String'>
    readonly precio: FieldRef<"producto", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * producto findUnique
   */
  export type productoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto findUniqueOrThrow
   */
  export type productoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto findFirst
   */
  export type productoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * producto findFirstOrThrow
   */
  export type productoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which producto to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * producto findMany
   */
  export type productoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productoOrderByWithRelationInput | productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * producto create
   */
  export type productoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * The data needed to create a producto.
     */
    data: XOR<productoCreateInput, productoUncheckedCreateInput>
  }

  /**
   * producto createMany
   */
  export type productoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: productoCreateManyInput | productoCreateManyInput[]
  }

  /**
   * producto update
   */
  export type productoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * The data needed to update a producto.
     */
    data: XOR<productoUpdateInput, productoUncheckedUpdateInput>
    /**
     * Choose, which producto to update.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto updateMany
   */
  export type productoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productoUpdateManyMutationInput, productoUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productoWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * producto upsert
   */
  export type productoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * The filter to search for the producto to update in case it exists.
     */
    where: productoWhereUniqueInput
    /**
     * In case the producto found by the `where` argument doesn't exist, create a new producto with this data.
     */
    create: XOR<productoCreateInput, productoUncheckedCreateInput>
    /**
     * In case the producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productoUpdateInput, productoUncheckedUpdateInput>
  }

  /**
   * producto delete
   */
  export type productoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
    /**
     * Filter which producto to delete.
     */
    where: productoWhereUniqueInput
  }

  /**
   * producto deleteMany
   */
  export type productoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productoWhereInput
    /**
     * Limit how many productos to delete.
     */
    limit?: number
  }

  /**
   * producto.itemsCarrito
   */
  export type producto$itemsCarritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carritoItem
     */
    select?: carritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carritoItem
     */
    omit?: carritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoItemInclude<ExtArgs> | null
    where?: carritoItemWhereInput
    orderBy?: carritoItemOrderByWithRelationInput | carritoItemOrderByWithRelationInput[]
    cursor?: carritoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * producto without action
   */
  export type productoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the producto
     */
    omit?: productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productoInclude<ExtArgs> | null
  }


  /**
   * Model carrito
   */

  export type AggregateCarrito = {
    _count: CarritoCountAggregateOutputType | null
    _avg: CarritoAvgAggregateOutputType | null
    _sum: CarritoSumAggregateOutputType | null
    _min: CarritoMinAggregateOutputType | null
    _max: CarritoMaxAggregateOutputType | null
  }

  export type CarritoAvgAggregateOutputType = {
    id: number | null
  }

  export type CarritoSumAggregateOutputType = {
    id: number | null
  }

  export type CarritoMinAggregateOutputType = {
    id: number | null
    creadoEn: Date | null
    cerrado: boolean | null
  }

  export type CarritoMaxAggregateOutputType = {
    id: number | null
    creadoEn: Date | null
    cerrado: boolean | null
  }

  export type CarritoCountAggregateOutputType = {
    id: number
    creadoEn: number
    cerrado: number
    _all: number
  }


  export type CarritoAvgAggregateInputType = {
    id?: true
  }

  export type CarritoSumAggregateInputType = {
    id?: true
  }

  export type CarritoMinAggregateInputType = {
    id?: true
    creadoEn?: true
    cerrado?: true
  }

  export type CarritoMaxAggregateInputType = {
    id?: true
    creadoEn?: true
    cerrado?: true
  }

  export type CarritoCountAggregateInputType = {
    id?: true
    creadoEn?: true
    cerrado?: true
    _all?: true
  }

  export type CarritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carrito to aggregate.
     */
    where?: carritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carritos to fetch.
     */
    orderBy?: carritoOrderByWithRelationInput | carritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carritos
    **/
    _count?: true | CarritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarritoMaxAggregateInputType
  }

  export type GetCarritoAggregateType<T extends CarritoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrito[P]>
      : GetScalarType<T[P], AggregateCarrito[P]>
  }




  export type carritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carritoWhereInput
    orderBy?: carritoOrderByWithAggregationInput | carritoOrderByWithAggregationInput[]
    by: CarritoScalarFieldEnum[] | CarritoScalarFieldEnum
    having?: carritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarritoCountAggregateInputType | true
    _avg?: CarritoAvgAggregateInputType
    _sum?: CarritoSumAggregateInputType
    _min?: CarritoMinAggregateInputType
    _max?: CarritoMaxAggregateInputType
  }

  export type CarritoGroupByOutputType = {
    id: number
    creadoEn: Date
    cerrado: boolean
    _count: CarritoCountAggregateOutputType | null
    _avg: CarritoAvgAggregateOutputType | null
    _sum: CarritoSumAggregateOutputType | null
    _min: CarritoMinAggregateOutputType | null
    _max: CarritoMaxAggregateOutputType | null
  }

  type GetCarritoGroupByPayload<T extends carritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarritoGroupByOutputType[P]>
            : GetScalarType<T[P], CarritoGroupByOutputType[P]>
        }
      >
    >


  export type carritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creadoEn?: boolean
    cerrado?: boolean
    items?: boolean | carrito$itemsArgs<ExtArgs>
    _count?: boolean | CarritoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrito"]>



  export type carritoSelectScalar = {
    id?: boolean
    creadoEn?: boolean
    cerrado?: boolean
  }

  export type carritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creadoEn" | "cerrado", ExtArgs["result"]["carrito"]>
  export type carritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | carrito$itemsArgs<ExtArgs>
    _count?: boolean | CarritoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $carritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carrito"
    objects: {
      items: Prisma.$carritoItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creadoEn: Date
      cerrado: boolean
    }, ExtArgs["result"]["carrito"]>
    composites: {}
  }

  type carritoGetPayload<S extends boolean | null | undefined | carritoDefaultArgs> = $Result.GetResult<Prisma.$carritoPayload, S>

  type carritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarritoCountAggregateInputType | true
    }

  export interface carritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carrito'], meta: { name: 'carrito' } }
    /**
     * Find zero or one Carrito that matches the filter.
     * @param {carritoFindUniqueArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carritoFindUniqueArgs>(args: SelectSubset<T, carritoFindUniqueArgs<ExtArgs>>): Prisma__carritoClient<$Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carritoFindUniqueOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carritoFindUniqueOrThrowArgs>(args: SelectSubset<T, carritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carritoClient<$Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carritoFindFirstArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carritoFindFirstArgs>(args?: SelectSubset<T, carritoFindFirstArgs<ExtArgs>>): Prisma__carritoClient<$Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carritoFindFirstOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carritoFindFirstOrThrowArgs>(args?: SelectSubset<T, carritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__carritoClient<$Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carritos
     * const carritos = await prisma.carrito.findMany()
     * 
     * // Get first 10 Carritos
     * const carritos = await prisma.carrito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carritoWithIdOnly = await prisma.carrito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends carritoFindManyArgs>(args?: SelectSubset<T, carritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrito.
     * @param {carritoCreateArgs} args - Arguments to create a Carrito.
     * @example
     * // Create one Carrito
     * const Carrito = await prisma.carrito.create({
     *   data: {
     *     // ... data to create a Carrito
     *   }
     * })
     * 
     */
    create<T extends carritoCreateArgs>(args: SelectSubset<T, carritoCreateArgs<ExtArgs>>): Prisma__carritoClient<$Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carritos.
     * @param {carritoCreateManyArgs} args - Arguments to create many Carritos.
     * @example
     * // Create many Carritos
     * const carrito = await prisma.carrito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carritoCreateManyArgs>(args?: SelectSubset<T, carritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carrito.
     * @param {carritoDeleteArgs} args - Arguments to delete one Carrito.
     * @example
     * // Delete one Carrito
     * const Carrito = await prisma.carrito.delete({
     *   where: {
     *     // ... filter to delete one Carrito
     *   }
     * })
     * 
     */
    delete<T extends carritoDeleteArgs>(args: SelectSubset<T, carritoDeleteArgs<ExtArgs>>): Prisma__carritoClient<$Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrito.
     * @param {carritoUpdateArgs} args - Arguments to update one Carrito.
     * @example
     * // Update one Carrito
     * const carrito = await prisma.carrito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carritoUpdateArgs>(args: SelectSubset<T, carritoUpdateArgs<ExtArgs>>): Prisma__carritoClient<$Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carritos.
     * @param {carritoDeleteManyArgs} args - Arguments to filter Carritos to delete.
     * @example
     * // Delete a few Carritos
     * const { count } = await prisma.carrito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carritoDeleteManyArgs>(args?: SelectSubset<T, carritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carritos
     * const carrito = await prisma.carrito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carritoUpdateManyArgs>(args: SelectSubset<T, carritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carrito.
     * @param {carritoUpsertArgs} args - Arguments to update or create a Carrito.
     * @example
     * // Update or create a Carrito
     * const carrito = await prisma.carrito.upsert({
     *   create: {
     *     // ... data to create a Carrito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrito we want to update
     *   }
     * })
     */
    upsert<T extends carritoUpsertArgs>(args: SelectSubset<T, carritoUpsertArgs<ExtArgs>>): Prisma__carritoClient<$Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carritoCountArgs} args - Arguments to filter Carritos to count.
     * @example
     * // Count the number of Carritos
     * const count = await prisma.carrito.count({
     *   where: {
     *     // ... the filter for the Carritos we want to count
     *   }
     * })
    **/
    count<T extends carritoCountArgs>(
      args?: Subset<T, carritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarritoAggregateArgs>(args: Subset<T, CarritoAggregateArgs>): Prisma.PrismaPromise<GetCarritoAggregateType<T>>

    /**
     * Group by Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carritoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends carritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carritoGroupByArgs['orderBy'] }
        : { orderBy?: carritoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, carritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carrito model
   */
  readonly fields: carritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carrito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends carrito$itemsArgs<ExtArgs> = {}>(args?: Subset<T, carrito$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carritoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carrito model
   */
  interface carritoFieldRefs {
    readonly id: FieldRef<"carrito", 'Int'>
    readonly creadoEn: FieldRef<"carrito", 'DateTime'>
    readonly cerrado: FieldRef<"carrito", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * carrito findUnique
   */
  export type carritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrito
     */
    select?: carritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrito
     */
    omit?: carritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoInclude<ExtArgs> | null
    /**
     * Filter, which carrito to fetch.
     */
    where: carritoWhereUniqueInput
  }

  /**
   * carrito findUniqueOrThrow
   */
  export type carritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrito
     */
    select?: carritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrito
     */
    omit?: carritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoInclude<ExtArgs> | null
    /**
     * Filter, which carrito to fetch.
     */
    where: carritoWhereUniqueInput
  }

  /**
   * carrito findFirst
   */
  export type carritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrito
     */
    select?: carritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrito
     */
    omit?: carritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoInclude<ExtArgs> | null
    /**
     * Filter, which carrito to fetch.
     */
    where?: carritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carritos to fetch.
     */
    orderBy?: carritoOrderByWithRelationInput | carritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carritos.
     */
    cursor?: carritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * carrito findFirstOrThrow
   */
  export type carritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrito
     */
    select?: carritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrito
     */
    omit?: carritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoInclude<ExtArgs> | null
    /**
     * Filter, which carrito to fetch.
     */
    where?: carritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carritos to fetch.
     */
    orderBy?: carritoOrderByWithRelationInput | carritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carritos.
     */
    cursor?: carritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * carrito findMany
   */
  export type carritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrito
     */
    select?: carritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrito
     */
    omit?: carritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoInclude<ExtArgs> | null
    /**
     * Filter, which carritos to fetch.
     */
    where?: carritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carritos to fetch.
     */
    orderBy?: carritoOrderByWithRelationInput | carritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carritos.
     */
    cursor?: carritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carritos.
     */
    skip?: number
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * carrito create
   */
  export type carritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrito
     */
    select?: carritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrito
     */
    omit?: carritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoInclude<ExtArgs> | null
    /**
     * The data needed to create a carrito.
     */
    data?: XOR<carritoCreateInput, carritoUncheckedCreateInput>
  }

  /**
   * carrito createMany
   */
  export type carritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carritos.
     */
    data: carritoCreateManyInput | carritoCreateManyInput[]
  }

  /**
   * carrito update
   */
  export type carritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrito
     */
    select?: carritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrito
     */
    omit?: carritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoInclude<ExtArgs> | null
    /**
     * The data needed to update a carrito.
     */
    data: XOR<carritoUpdateInput, carritoUncheckedUpdateInput>
    /**
     * Choose, which carrito to update.
     */
    where: carritoWhereUniqueInput
  }

  /**
   * carrito updateMany
   */
  export type carritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carritos.
     */
    data: XOR<carritoUpdateManyMutationInput, carritoUncheckedUpdateManyInput>
    /**
     * Filter which carritos to update
     */
    where?: carritoWhereInput
    /**
     * Limit how many carritos to update.
     */
    limit?: number
  }

  /**
   * carrito upsert
   */
  export type carritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrito
     */
    select?: carritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrito
     */
    omit?: carritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoInclude<ExtArgs> | null
    /**
     * The filter to search for the carrito to update in case it exists.
     */
    where: carritoWhereUniqueInput
    /**
     * In case the carrito found by the `where` argument doesn't exist, create a new carrito with this data.
     */
    create: XOR<carritoCreateInput, carritoUncheckedCreateInput>
    /**
     * In case the carrito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carritoUpdateInput, carritoUncheckedUpdateInput>
  }

  /**
   * carrito delete
   */
  export type carritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrito
     */
    select?: carritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrito
     */
    omit?: carritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoInclude<ExtArgs> | null
    /**
     * Filter which carrito to delete.
     */
    where: carritoWhereUniqueInput
  }

  /**
   * carrito deleteMany
   */
  export type carritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carritos to delete
     */
    where?: carritoWhereInput
    /**
     * Limit how many carritos to delete.
     */
    limit?: number
  }

  /**
   * carrito.items
   */
  export type carrito$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carritoItem
     */
    select?: carritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carritoItem
     */
    omit?: carritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoItemInclude<ExtArgs> | null
    where?: carritoItemWhereInput
    orderBy?: carritoItemOrderByWithRelationInput | carritoItemOrderByWithRelationInput[]
    cursor?: carritoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * carrito without action
   */
  export type carritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrito
     */
    select?: carritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrito
     */
    omit?: carritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoInclude<ExtArgs> | null
  }


  /**
   * Model carritoItem
   */

  export type AggregateCarritoItem = {
    _count: CarritoItemCountAggregateOutputType | null
    _avg: CarritoItemAvgAggregateOutputType | null
    _sum: CarritoItemSumAggregateOutputType | null
    _min: CarritoItemMinAggregateOutputType | null
    _max: CarritoItemMaxAggregateOutputType | null
  }

  export type CarritoItemAvgAggregateOutputType = {
    id: number | null
    carritoId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type CarritoItemSumAggregateOutputType = {
    id: number | null
    carritoId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type CarritoItemMinAggregateOutputType = {
    id: number | null
    carritoId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type CarritoItemMaxAggregateOutputType = {
    id: number | null
    carritoId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type CarritoItemCountAggregateOutputType = {
    id: number
    carritoId: number
    productoId: number
    cantidad: number
    _all: number
  }


  export type CarritoItemAvgAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
  }

  export type CarritoItemSumAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
  }

  export type CarritoItemMinAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
  }

  export type CarritoItemMaxAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
  }

  export type CarritoItemCountAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
    _all?: true
  }

  export type CarritoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carritoItem to aggregate.
     */
    where?: carritoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carritoItems to fetch.
     */
    orderBy?: carritoItemOrderByWithRelationInput | carritoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carritoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carritoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carritoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carritoItems
    **/
    _count?: true | CarritoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarritoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarritoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarritoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarritoItemMaxAggregateInputType
  }

  export type GetCarritoItemAggregateType<T extends CarritoItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCarritoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarritoItem[P]>
      : GetScalarType<T[P], AggregateCarritoItem[P]>
  }




  export type carritoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carritoItemWhereInput
    orderBy?: carritoItemOrderByWithAggregationInput | carritoItemOrderByWithAggregationInput[]
    by: CarritoItemScalarFieldEnum[] | CarritoItemScalarFieldEnum
    having?: carritoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarritoItemCountAggregateInputType | true
    _avg?: CarritoItemAvgAggregateInputType
    _sum?: CarritoItemSumAggregateInputType
    _min?: CarritoItemMinAggregateInputType
    _max?: CarritoItemMaxAggregateInputType
  }

  export type CarritoItemGroupByOutputType = {
    id: number
    carritoId: number
    productoId: number
    cantidad: number
    _count: CarritoItemCountAggregateOutputType | null
    _avg: CarritoItemAvgAggregateOutputType | null
    _sum: CarritoItemSumAggregateOutputType | null
    _min: CarritoItemMinAggregateOutputType | null
    _max: CarritoItemMaxAggregateOutputType | null
  }

  type GetCarritoItemGroupByPayload<T extends carritoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarritoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarritoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarritoItemGroupByOutputType[P]>
            : GetScalarType<T[P], CarritoItemGroupByOutputType[P]>
        }
      >
    >


  export type carritoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carritoId?: boolean
    productoId?: boolean
    cantidad?: boolean
    carrito?: boolean | carritoDefaultArgs<ExtArgs>
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carritoItem"]>



  export type carritoItemSelectScalar = {
    id?: boolean
    carritoId?: boolean
    productoId?: boolean
    cantidad?: boolean
  }

  export type carritoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carritoId" | "productoId" | "cantidad", ExtArgs["result"]["carritoItem"]>
  export type carritoItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrito?: boolean | carritoDefaultArgs<ExtArgs>
    producto?: boolean | productoDefaultArgs<ExtArgs>
  }

  export type $carritoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carritoItem"
    objects: {
      carrito: Prisma.$carritoPayload<ExtArgs>
      producto: Prisma.$productoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carritoId: number
      productoId: number
      cantidad: number
    }, ExtArgs["result"]["carritoItem"]>
    composites: {}
  }

  type carritoItemGetPayload<S extends boolean | null | undefined | carritoItemDefaultArgs> = $Result.GetResult<Prisma.$carritoItemPayload, S>

  type carritoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carritoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarritoItemCountAggregateInputType | true
    }

  export interface carritoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carritoItem'], meta: { name: 'carritoItem' } }
    /**
     * Find zero or one CarritoItem that matches the filter.
     * @param {carritoItemFindUniqueArgs} args - Arguments to find a CarritoItem
     * @example
     * // Get one CarritoItem
     * const carritoItem = await prisma.carritoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carritoItemFindUniqueArgs>(args: SelectSubset<T, carritoItemFindUniqueArgs<ExtArgs>>): Prisma__carritoItemClient<$Result.GetResult<Prisma.$carritoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarritoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carritoItemFindUniqueOrThrowArgs} args - Arguments to find a CarritoItem
     * @example
     * // Get one CarritoItem
     * const carritoItem = await prisma.carritoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carritoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, carritoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carritoItemClient<$Result.GetResult<Prisma.$carritoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarritoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carritoItemFindFirstArgs} args - Arguments to find a CarritoItem
     * @example
     * // Get one CarritoItem
     * const carritoItem = await prisma.carritoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carritoItemFindFirstArgs>(args?: SelectSubset<T, carritoItemFindFirstArgs<ExtArgs>>): Prisma__carritoItemClient<$Result.GetResult<Prisma.$carritoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarritoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carritoItemFindFirstOrThrowArgs} args - Arguments to find a CarritoItem
     * @example
     * // Get one CarritoItem
     * const carritoItem = await prisma.carritoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carritoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, carritoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__carritoItemClient<$Result.GetResult<Prisma.$carritoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarritoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carritoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarritoItems
     * const carritoItems = await prisma.carritoItem.findMany()
     * 
     * // Get first 10 CarritoItems
     * const carritoItems = await prisma.carritoItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carritoItemWithIdOnly = await prisma.carritoItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends carritoItemFindManyArgs>(args?: SelectSubset<T, carritoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carritoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarritoItem.
     * @param {carritoItemCreateArgs} args - Arguments to create a CarritoItem.
     * @example
     * // Create one CarritoItem
     * const CarritoItem = await prisma.carritoItem.create({
     *   data: {
     *     // ... data to create a CarritoItem
     *   }
     * })
     * 
     */
    create<T extends carritoItemCreateArgs>(args: SelectSubset<T, carritoItemCreateArgs<ExtArgs>>): Prisma__carritoItemClient<$Result.GetResult<Prisma.$carritoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarritoItems.
     * @param {carritoItemCreateManyArgs} args - Arguments to create many CarritoItems.
     * @example
     * // Create many CarritoItems
     * const carritoItem = await prisma.carritoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carritoItemCreateManyArgs>(args?: SelectSubset<T, carritoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarritoItem.
     * @param {carritoItemDeleteArgs} args - Arguments to delete one CarritoItem.
     * @example
     * // Delete one CarritoItem
     * const CarritoItem = await prisma.carritoItem.delete({
     *   where: {
     *     // ... filter to delete one CarritoItem
     *   }
     * })
     * 
     */
    delete<T extends carritoItemDeleteArgs>(args: SelectSubset<T, carritoItemDeleteArgs<ExtArgs>>): Prisma__carritoItemClient<$Result.GetResult<Prisma.$carritoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarritoItem.
     * @param {carritoItemUpdateArgs} args - Arguments to update one CarritoItem.
     * @example
     * // Update one CarritoItem
     * const carritoItem = await prisma.carritoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carritoItemUpdateArgs>(args: SelectSubset<T, carritoItemUpdateArgs<ExtArgs>>): Prisma__carritoItemClient<$Result.GetResult<Prisma.$carritoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarritoItems.
     * @param {carritoItemDeleteManyArgs} args - Arguments to filter CarritoItems to delete.
     * @example
     * // Delete a few CarritoItems
     * const { count } = await prisma.carritoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carritoItemDeleteManyArgs>(args?: SelectSubset<T, carritoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarritoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carritoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarritoItems
     * const carritoItem = await prisma.carritoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carritoItemUpdateManyArgs>(args: SelectSubset<T, carritoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarritoItem.
     * @param {carritoItemUpsertArgs} args - Arguments to update or create a CarritoItem.
     * @example
     * // Update or create a CarritoItem
     * const carritoItem = await prisma.carritoItem.upsert({
     *   create: {
     *     // ... data to create a CarritoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarritoItem we want to update
     *   }
     * })
     */
    upsert<T extends carritoItemUpsertArgs>(args: SelectSubset<T, carritoItemUpsertArgs<ExtArgs>>): Prisma__carritoItemClient<$Result.GetResult<Prisma.$carritoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarritoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carritoItemCountArgs} args - Arguments to filter CarritoItems to count.
     * @example
     * // Count the number of CarritoItems
     * const count = await prisma.carritoItem.count({
     *   where: {
     *     // ... the filter for the CarritoItems we want to count
     *   }
     * })
    **/
    count<T extends carritoItemCountArgs>(
      args?: Subset<T, carritoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarritoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarritoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarritoItemAggregateArgs>(args: Subset<T, CarritoItemAggregateArgs>): Prisma.PrismaPromise<GetCarritoItemAggregateType<T>>

    /**
     * Group by CarritoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carritoItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends carritoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carritoItemGroupByArgs['orderBy'] }
        : { orderBy?: carritoItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, carritoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carritoItem model
   */
  readonly fields: carritoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carritoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carritoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrito<T extends carritoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, carritoDefaultArgs<ExtArgs>>): Prisma__carritoClient<$Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends productoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productoDefaultArgs<ExtArgs>>): Prisma__productoClient<$Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carritoItem model
   */
  interface carritoItemFieldRefs {
    readonly id: FieldRef<"carritoItem", 'Int'>
    readonly carritoId: FieldRef<"carritoItem", 'Int'>
    readonly productoId: FieldRef<"carritoItem", 'Int'>
    readonly cantidad: FieldRef<"carritoItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * carritoItem findUnique
   */
  export type carritoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carritoItem
     */
    select?: carritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carritoItem
     */
    omit?: carritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoItemInclude<ExtArgs> | null
    /**
     * Filter, which carritoItem to fetch.
     */
    where: carritoItemWhereUniqueInput
  }

  /**
   * carritoItem findUniqueOrThrow
   */
  export type carritoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carritoItem
     */
    select?: carritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carritoItem
     */
    omit?: carritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoItemInclude<ExtArgs> | null
    /**
     * Filter, which carritoItem to fetch.
     */
    where: carritoItemWhereUniqueInput
  }

  /**
   * carritoItem findFirst
   */
  export type carritoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carritoItem
     */
    select?: carritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carritoItem
     */
    omit?: carritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoItemInclude<ExtArgs> | null
    /**
     * Filter, which carritoItem to fetch.
     */
    where?: carritoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carritoItems to fetch.
     */
    orderBy?: carritoItemOrderByWithRelationInput | carritoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carritoItems.
     */
    cursor?: carritoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carritoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carritoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carritoItems.
     */
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * carritoItem findFirstOrThrow
   */
  export type carritoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carritoItem
     */
    select?: carritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carritoItem
     */
    omit?: carritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoItemInclude<ExtArgs> | null
    /**
     * Filter, which carritoItem to fetch.
     */
    where?: carritoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carritoItems to fetch.
     */
    orderBy?: carritoItemOrderByWithRelationInput | carritoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carritoItems.
     */
    cursor?: carritoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carritoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carritoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carritoItems.
     */
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * carritoItem findMany
   */
  export type carritoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carritoItem
     */
    select?: carritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carritoItem
     */
    omit?: carritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoItemInclude<ExtArgs> | null
    /**
     * Filter, which carritoItems to fetch.
     */
    where?: carritoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carritoItems to fetch.
     */
    orderBy?: carritoItemOrderByWithRelationInput | carritoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carritoItems.
     */
    cursor?: carritoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carritoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carritoItems.
     */
    skip?: number
    distinct?: CarritoItemScalarFieldEnum | CarritoItemScalarFieldEnum[]
  }

  /**
   * carritoItem create
   */
  export type carritoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carritoItem
     */
    select?: carritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carritoItem
     */
    omit?: carritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoItemInclude<ExtArgs> | null
    /**
     * The data needed to create a carritoItem.
     */
    data: XOR<carritoItemCreateInput, carritoItemUncheckedCreateInput>
  }

  /**
   * carritoItem createMany
   */
  export type carritoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carritoItems.
     */
    data: carritoItemCreateManyInput | carritoItemCreateManyInput[]
  }

  /**
   * carritoItem update
   */
  export type carritoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carritoItem
     */
    select?: carritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carritoItem
     */
    omit?: carritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoItemInclude<ExtArgs> | null
    /**
     * The data needed to update a carritoItem.
     */
    data: XOR<carritoItemUpdateInput, carritoItemUncheckedUpdateInput>
    /**
     * Choose, which carritoItem to update.
     */
    where: carritoItemWhereUniqueInput
  }

  /**
   * carritoItem updateMany
   */
  export type carritoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carritoItems.
     */
    data: XOR<carritoItemUpdateManyMutationInput, carritoItemUncheckedUpdateManyInput>
    /**
     * Filter which carritoItems to update
     */
    where?: carritoItemWhereInput
    /**
     * Limit how many carritoItems to update.
     */
    limit?: number
  }

  /**
   * carritoItem upsert
   */
  export type carritoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carritoItem
     */
    select?: carritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carritoItem
     */
    omit?: carritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoItemInclude<ExtArgs> | null
    /**
     * The filter to search for the carritoItem to update in case it exists.
     */
    where: carritoItemWhereUniqueInput
    /**
     * In case the carritoItem found by the `where` argument doesn't exist, create a new carritoItem with this data.
     */
    create: XOR<carritoItemCreateInput, carritoItemUncheckedCreateInput>
    /**
     * In case the carritoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carritoItemUpdateInput, carritoItemUncheckedUpdateInput>
  }

  /**
   * carritoItem delete
   */
  export type carritoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carritoItem
     */
    select?: carritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carritoItem
     */
    omit?: carritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoItemInclude<ExtArgs> | null
    /**
     * Filter which carritoItem to delete.
     */
    where: carritoItemWhereUniqueInput
  }

  /**
   * carritoItem deleteMany
   */
  export type carritoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carritoItems to delete
     */
    where?: carritoItemWhereInput
    /**
     * Limit how many carritoItems to delete.
     */
    limit?: number
  }

  /**
   * carritoItem without action
   */
  export type carritoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carritoItem
     */
    select?: carritoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carritoItem
     */
    omit?: carritoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carritoItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    clasificacion: 'clasificacion',
    precio: 'precio'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const CarritoScalarFieldEnum: {
    id: 'id',
    creadoEn: 'creadoEn',
    cerrado: 'cerrado'
  };

  export type CarritoScalarFieldEnum = (typeof CarritoScalarFieldEnum)[keyof typeof CarritoScalarFieldEnum]


  export const CarritoItemScalarFieldEnum: {
    id: 'id',
    carritoId: 'carritoId',
    productoId: 'productoId',
    cantidad: 'cantidad'
  };

  export type CarritoItemScalarFieldEnum = (typeof CarritoItemScalarFieldEnum)[keyof typeof CarritoItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type productoWhereInput = {
    AND?: productoWhereInput | productoWhereInput[]
    OR?: productoWhereInput[]
    NOT?: productoWhereInput | productoWhereInput[]
    id?: IntFilter<"producto"> | number
    nombre?: StringFilter<"producto"> | string
    descripcion?: StringFilter<"producto"> | string
    clasificacion?: StringFilter<"producto"> | string
    precio?: FloatFilter<"producto"> | number
    itemsCarrito?: CarritoItemListRelationFilter
  }

  export type productoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    clasificacion?: SortOrder
    precio?: SortOrder
    itemsCarrito?: carritoItemOrderByRelationAggregateInput
  }

  export type productoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productoWhereInput | productoWhereInput[]
    OR?: productoWhereInput[]
    NOT?: productoWhereInput | productoWhereInput[]
    nombre?: StringFilter<"producto"> | string
    descripcion?: StringFilter<"producto"> | string
    clasificacion?: StringFilter<"producto"> | string
    precio?: FloatFilter<"producto"> | number
    itemsCarrito?: CarritoItemListRelationFilter
  }, "id">

  export type productoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    clasificacion?: SortOrder
    precio?: SortOrder
    _count?: productoCountOrderByAggregateInput
    _avg?: productoAvgOrderByAggregateInput
    _max?: productoMaxOrderByAggregateInput
    _min?: productoMinOrderByAggregateInput
    _sum?: productoSumOrderByAggregateInput
  }

  export type productoScalarWhereWithAggregatesInput = {
    AND?: productoScalarWhereWithAggregatesInput | productoScalarWhereWithAggregatesInput[]
    OR?: productoScalarWhereWithAggregatesInput[]
    NOT?: productoScalarWhereWithAggregatesInput | productoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"producto"> | number
    nombre?: StringWithAggregatesFilter<"producto"> | string
    descripcion?: StringWithAggregatesFilter<"producto"> | string
    clasificacion?: StringWithAggregatesFilter<"producto"> | string
    precio?: FloatWithAggregatesFilter<"producto"> | number
  }

  export type carritoWhereInput = {
    AND?: carritoWhereInput | carritoWhereInput[]
    OR?: carritoWhereInput[]
    NOT?: carritoWhereInput | carritoWhereInput[]
    id?: IntFilter<"carrito"> | number
    creadoEn?: DateTimeFilter<"carrito"> | Date | string
    cerrado?: BoolFilter<"carrito"> | boolean
    items?: CarritoItemListRelationFilter
  }

  export type carritoOrderByWithRelationInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    cerrado?: SortOrder
    items?: carritoItemOrderByRelationAggregateInput
  }

  export type carritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: carritoWhereInput | carritoWhereInput[]
    OR?: carritoWhereInput[]
    NOT?: carritoWhereInput | carritoWhereInput[]
    creadoEn?: DateTimeFilter<"carrito"> | Date | string
    cerrado?: BoolFilter<"carrito"> | boolean
    items?: CarritoItemListRelationFilter
  }, "id">

  export type carritoOrderByWithAggregationInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    cerrado?: SortOrder
    _count?: carritoCountOrderByAggregateInput
    _avg?: carritoAvgOrderByAggregateInput
    _max?: carritoMaxOrderByAggregateInput
    _min?: carritoMinOrderByAggregateInput
    _sum?: carritoSumOrderByAggregateInput
  }

  export type carritoScalarWhereWithAggregatesInput = {
    AND?: carritoScalarWhereWithAggregatesInput | carritoScalarWhereWithAggregatesInput[]
    OR?: carritoScalarWhereWithAggregatesInput[]
    NOT?: carritoScalarWhereWithAggregatesInput | carritoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carrito"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"carrito"> | Date | string
    cerrado?: BoolWithAggregatesFilter<"carrito"> | boolean
  }

  export type carritoItemWhereInput = {
    AND?: carritoItemWhereInput | carritoItemWhereInput[]
    OR?: carritoItemWhereInput[]
    NOT?: carritoItemWhereInput | carritoItemWhereInput[]
    id?: IntFilter<"carritoItem"> | number
    carritoId?: IntFilter<"carritoItem"> | number
    productoId?: IntFilter<"carritoItem"> | number
    cantidad?: IntFilter<"carritoItem"> | number
    carrito?: XOR<CarritoScalarRelationFilter, carritoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, productoWhereInput>
  }

  export type carritoItemOrderByWithRelationInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    carrito?: carritoOrderByWithRelationInput
    producto?: productoOrderByWithRelationInput
  }

  export type carritoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    carritoId_productoId?: carritoItemCarritoIdProductoIdCompoundUniqueInput
    AND?: carritoItemWhereInput | carritoItemWhereInput[]
    OR?: carritoItemWhereInput[]
    NOT?: carritoItemWhereInput | carritoItemWhereInput[]
    carritoId?: IntFilter<"carritoItem"> | number
    productoId?: IntFilter<"carritoItem"> | number
    cantidad?: IntFilter<"carritoItem"> | number
    carrito?: XOR<CarritoScalarRelationFilter, carritoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, productoWhereInput>
  }, "id" | "carritoId_productoId">

  export type carritoItemOrderByWithAggregationInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    _count?: carritoItemCountOrderByAggregateInput
    _avg?: carritoItemAvgOrderByAggregateInput
    _max?: carritoItemMaxOrderByAggregateInput
    _min?: carritoItemMinOrderByAggregateInput
    _sum?: carritoItemSumOrderByAggregateInput
  }

  export type carritoItemScalarWhereWithAggregatesInput = {
    AND?: carritoItemScalarWhereWithAggregatesInput | carritoItemScalarWhereWithAggregatesInput[]
    OR?: carritoItemScalarWhereWithAggregatesInput[]
    NOT?: carritoItemScalarWhereWithAggregatesInput | carritoItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carritoItem"> | number
    carritoId?: IntWithAggregatesFilter<"carritoItem"> | number
    productoId?: IntWithAggregatesFilter<"carritoItem"> | number
    cantidad?: IntWithAggregatesFilter<"carritoItem"> | number
  }

  export type productoCreateInput = {
    nombre: string
    descripcion: string
    clasificacion: string
    precio: number
    itemsCarrito?: carritoItemCreateNestedManyWithoutProductoInput
  }

  export type productoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    clasificacion: string
    precio: number
    itemsCarrito?: carritoItemUncheckedCreateNestedManyWithoutProductoInput
  }

  export type productoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    clasificacion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    itemsCarrito?: carritoItemUpdateManyWithoutProductoNestedInput
  }

  export type productoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    clasificacion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    itemsCarrito?: carritoItemUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type productoCreateManyInput = {
    nombre: string
    descripcion: string
    clasificacion: string
    precio: number
  }

  export type productoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    clasificacion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type productoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    clasificacion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type carritoCreateInput = {
    creadoEn?: Date | string
    cerrado?: boolean
    items?: carritoItemCreateNestedManyWithoutCarritoInput
  }

  export type carritoUncheckedCreateInput = {
    id?: number
    creadoEn?: Date | string
    cerrado?: boolean
    items?: carritoItemUncheckedCreateNestedManyWithoutCarritoInput
  }

  export type carritoUpdateInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cerrado?: BoolFieldUpdateOperationsInput | boolean
    items?: carritoItemUpdateManyWithoutCarritoNestedInput
  }

  export type carritoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cerrado?: BoolFieldUpdateOperationsInput | boolean
    items?: carritoItemUncheckedUpdateManyWithoutCarritoNestedInput
  }

  export type carritoCreateManyInput = {
    creadoEn?: Date | string
    cerrado?: boolean
  }

  export type carritoUpdateManyMutationInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cerrado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type carritoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cerrado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type carritoItemCreateInput = {
    cantidad?: number
    carrito: carritoCreateNestedOneWithoutItemsInput
    producto: productoCreateNestedOneWithoutItemsCarritoInput
  }

  export type carritoItemUncheckedCreateInput = {
    id?: number
    carritoId: number
    productoId: number
    cantidad?: number
  }

  export type carritoItemUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    carrito?: carritoUpdateOneRequiredWithoutItemsNestedInput
    producto?: productoUpdateOneRequiredWithoutItemsCarritoNestedInput
  }

  export type carritoItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carritoId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type carritoItemCreateManyInput = {
    carritoId: number
    productoId: number
    cantidad?: number
  }

  export type carritoItemUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type carritoItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carritoId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CarritoItemListRelationFilter = {
    every?: carritoItemWhereInput
    some?: carritoItemWhereInput
    none?: carritoItemWhereInput
  }

  export type carritoItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    clasificacion?: SortOrder
    precio?: SortOrder
  }

  export type productoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type productoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    clasificacion?: SortOrder
    precio?: SortOrder
  }

  export type productoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    clasificacion?: SortOrder
    precio?: SortOrder
  }

  export type productoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type carritoCountOrderByAggregateInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    cerrado?: SortOrder
  }

  export type carritoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type carritoMaxOrderByAggregateInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    cerrado?: SortOrder
  }

  export type carritoMinOrderByAggregateInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    cerrado?: SortOrder
  }

  export type carritoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CarritoScalarRelationFilter = {
    is?: carritoWhereInput
    isNot?: carritoWhereInput
  }

  export type ProductoScalarRelationFilter = {
    is?: productoWhereInput
    isNot?: productoWhereInput
  }

  export type carritoItemCarritoIdProductoIdCompoundUniqueInput = {
    carritoId: number
    productoId: number
  }

  export type carritoItemCountOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type carritoItemAvgOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type carritoItemMaxOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type carritoItemMinOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type carritoItemSumOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type carritoItemCreateNestedManyWithoutProductoInput = {
    create?: XOR<carritoItemCreateWithoutProductoInput, carritoItemUncheckedCreateWithoutProductoInput> | carritoItemCreateWithoutProductoInput[] | carritoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: carritoItemCreateOrConnectWithoutProductoInput | carritoItemCreateOrConnectWithoutProductoInput[]
    createMany?: carritoItemCreateManyProductoInputEnvelope
    connect?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
  }

  export type carritoItemUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<carritoItemCreateWithoutProductoInput, carritoItemUncheckedCreateWithoutProductoInput> | carritoItemCreateWithoutProductoInput[] | carritoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: carritoItemCreateOrConnectWithoutProductoInput | carritoItemCreateOrConnectWithoutProductoInput[]
    createMany?: carritoItemCreateManyProductoInputEnvelope
    connect?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type carritoItemUpdateManyWithoutProductoNestedInput = {
    create?: XOR<carritoItemCreateWithoutProductoInput, carritoItemUncheckedCreateWithoutProductoInput> | carritoItemCreateWithoutProductoInput[] | carritoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: carritoItemCreateOrConnectWithoutProductoInput | carritoItemCreateOrConnectWithoutProductoInput[]
    upsert?: carritoItemUpsertWithWhereUniqueWithoutProductoInput | carritoItemUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: carritoItemCreateManyProductoInputEnvelope
    set?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    disconnect?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    delete?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    connect?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    update?: carritoItemUpdateWithWhereUniqueWithoutProductoInput | carritoItemUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: carritoItemUpdateManyWithWhereWithoutProductoInput | carritoItemUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: carritoItemScalarWhereInput | carritoItemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type carritoItemUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<carritoItemCreateWithoutProductoInput, carritoItemUncheckedCreateWithoutProductoInput> | carritoItemCreateWithoutProductoInput[] | carritoItemUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: carritoItemCreateOrConnectWithoutProductoInput | carritoItemCreateOrConnectWithoutProductoInput[]
    upsert?: carritoItemUpsertWithWhereUniqueWithoutProductoInput | carritoItemUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: carritoItemCreateManyProductoInputEnvelope
    set?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    disconnect?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    delete?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    connect?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    update?: carritoItemUpdateWithWhereUniqueWithoutProductoInput | carritoItemUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: carritoItemUpdateManyWithWhereWithoutProductoInput | carritoItemUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: carritoItemScalarWhereInput | carritoItemScalarWhereInput[]
  }

  export type carritoItemCreateNestedManyWithoutCarritoInput = {
    create?: XOR<carritoItemCreateWithoutCarritoInput, carritoItemUncheckedCreateWithoutCarritoInput> | carritoItemCreateWithoutCarritoInput[] | carritoItemUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: carritoItemCreateOrConnectWithoutCarritoInput | carritoItemCreateOrConnectWithoutCarritoInput[]
    createMany?: carritoItemCreateManyCarritoInputEnvelope
    connect?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
  }

  export type carritoItemUncheckedCreateNestedManyWithoutCarritoInput = {
    create?: XOR<carritoItemCreateWithoutCarritoInput, carritoItemUncheckedCreateWithoutCarritoInput> | carritoItemCreateWithoutCarritoInput[] | carritoItemUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: carritoItemCreateOrConnectWithoutCarritoInput | carritoItemCreateOrConnectWithoutCarritoInput[]
    createMany?: carritoItemCreateManyCarritoInputEnvelope
    connect?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type carritoItemUpdateManyWithoutCarritoNestedInput = {
    create?: XOR<carritoItemCreateWithoutCarritoInput, carritoItemUncheckedCreateWithoutCarritoInput> | carritoItemCreateWithoutCarritoInput[] | carritoItemUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: carritoItemCreateOrConnectWithoutCarritoInput | carritoItemCreateOrConnectWithoutCarritoInput[]
    upsert?: carritoItemUpsertWithWhereUniqueWithoutCarritoInput | carritoItemUpsertWithWhereUniqueWithoutCarritoInput[]
    createMany?: carritoItemCreateManyCarritoInputEnvelope
    set?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    disconnect?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    delete?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    connect?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    update?: carritoItemUpdateWithWhereUniqueWithoutCarritoInput | carritoItemUpdateWithWhereUniqueWithoutCarritoInput[]
    updateMany?: carritoItemUpdateManyWithWhereWithoutCarritoInput | carritoItemUpdateManyWithWhereWithoutCarritoInput[]
    deleteMany?: carritoItemScalarWhereInput | carritoItemScalarWhereInput[]
  }

  export type carritoItemUncheckedUpdateManyWithoutCarritoNestedInput = {
    create?: XOR<carritoItemCreateWithoutCarritoInput, carritoItemUncheckedCreateWithoutCarritoInput> | carritoItemCreateWithoutCarritoInput[] | carritoItemUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: carritoItemCreateOrConnectWithoutCarritoInput | carritoItemCreateOrConnectWithoutCarritoInput[]
    upsert?: carritoItemUpsertWithWhereUniqueWithoutCarritoInput | carritoItemUpsertWithWhereUniqueWithoutCarritoInput[]
    createMany?: carritoItemCreateManyCarritoInputEnvelope
    set?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    disconnect?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    delete?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    connect?: carritoItemWhereUniqueInput | carritoItemWhereUniqueInput[]
    update?: carritoItemUpdateWithWhereUniqueWithoutCarritoInput | carritoItemUpdateWithWhereUniqueWithoutCarritoInput[]
    updateMany?: carritoItemUpdateManyWithWhereWithoutCarritoInput | carritoItemUpdateManyWithWhereWithoutCarritoInput[]
    deleteMany?: carritoItemScalarWhereInput | carritoItemScalarWhereInput[]
  }

  export type carritoCreateNestedOneWithoutItemsInput = {
    create?: XOR<carritoCreateWithoutItemsInput, carritoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: carritoCreateOrConnectWithoutItemsInput
    connect?: carritoWhereUniqueInput
  }

  export type productoCreateNestedOneWithoutItemsCarritoInput = {
    create?: XOR<productoCreateWithoutItemsCarritoInput, productoUncheckedCreateWithoutItemsCarritoInput>
    connectOrCreate?: productoCreateOrConnectWithoutItemsCarritoInput
    connect?: productoWhereUniqueInput
  }

  export type carritoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<carritoCreateWithoutItemsInput, carritoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: carritoCreateOrConnectWithoutItemsInput
    upsert?: carritoUpsertWithoutItemsInput
    connect?: carritoWhereUniqueInput
    update?: XOR<XOR<carritoUpdateToOneWithWhereWithoutItemsInput, carritoUpdateWithoutItemsInput>, carritoUncheckedUpdateWithoutItemsInput>
  }

  export type productoUpdateOneRequiredWithoutItemsCarritoNestedInput = {
    create?: XOR<productoCreateWithoutItemsCarritoInput, productoUncheckedCreateWithoutItemsCarritoInput>
    connectOrCreate?: productoCreateOrConnectWithoutItemsCarritoInput
    upsert?: productoUpsertWithoutItemsCarritoInput
    connect?: productoWhereUniqueInput
    update?: XOR<XOR<productoUpdateToOneWithWhereWithoutItemsCarritoInput, productoUpdateWithoutItemsCarritoInput>, productoUncheckedUpdateWithoutItemsCarritoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type carritoItemCreateWithoutProductoInput = {
    cantidad?: number
    carrito: carritoCreateNestedOneWithoutItemsInput
  }

  export type carritoItemUncheckedCreateWithoutProductoInput = {
    id?: number
    carritoId: number
    cantidad?: number
  }

  export type carritoItemCreateOrConnectWithoutProductoInput = {
    where: carritoItemWhereUniqueInput
    create: XOR<carritoItemCreateWithoutProductoInput, carritoItemUncheckedCreateWithoutProductoInput>
  }

  export type carritoItemCreateManyProductoInputEnvelope = {
    data: carritoItemCreateManyProductoInput | carritoItemCreateManyProductoInput[]
  }

  export type carritoItemUpsertWithWhereUniqueWithoutProductoInput = {
    where: carritoItemWhereUniqueInput
    update: XOR<carritoItemUpdateWithoutProductoInput, carritoItemUncheckedUpdateWithoutProductoInput>
    create: XOR<carritoItemCreateWithoutProductoInput, carritoItemUncheckedCreateWithoutProductoInput>
  }

  export type carritoItemUpdateWithWhereUniqueWithoutProductoInput = {
    where: carritoItemWhereUniqueInput
    data: XOR<carritoItemUpdateWithoutProductoInput, carritoItemUncheckedUpdateWithoutProductoInput>
  }

  export type carritoItemUpdateManyWithWhereWithoutProductoInput = {
    where: carritoItemScalarWhereInput
    data: XOR<carritoItemUpdateManyMutationInput, carritoItemUncheckedUpdateManyWithoutProductoInput>
  }

  export type carritoItemScalarWhereInput = {
    AND?: carritoItemScalarWhereInput | carritoItemScalarWhereInput[]
    OR?: carritoItemScalarWhereInput[]
    NOT?: carritoItemScalarWhereInput | carritoItemScalarWhereInput[]
    id?: IntFilter<"carritoItem"> | number
    carritoId?: IntFilter<"carritoItem"> | number
    productoId?: IntFilter<"carritoItem"> | number
    cantidad?: IntFilter<"carritoItem"> | number
  }

  export type carritoItemCreateWithoutCarritoInput = {
    cantidad?: number
    producto: productoCreateNestedOneWithoutItemsCarritoInput
  }

  export type carritoItemUncheckedCreateWithoutCarritoInput = {
    id?: number
    productoId: number
    cantidad?: number
  }

  export type carritoItemCreateOrConnectWithoutCarritoInput = {
    where: carritoItemWhereUniqueInput
    create: XOR<carritoItemCreateWithoutCarritoInput, carritoItemUncheckedCreateWithoutCarritoInput>
  }

  export type carritoItemCreateManyCarritoInputEnvelope = {
    data: carritoItemCreateManyCarritoInput | carritoItemCreateManyCarritoInput[]
  }

  export type carritoItemUpsertWithWhereUniqueWithoutCarritoInput = {
    where: carritoItemWhereUniqueInput
    update: XOR<carritoItemUpdateWithoutCarritoInput, carritoItemUncheckedUpdateWithoutCarritoInput>
    create: XOR<carritoItemCreateWithoutCarritoInput, carritoItemUncheckedCreateWithoutCarritoInput>
  }

  export type carritoItemUpdateWithWhereUniqueWithoutCarritoInput = {
    where: carritoItemWhereUniqueInput
    data: XOR<carritoItemUpdateWithoutCarritoInput, carritoItemUncheckedUpdateWithoutCarritoInput>
  }

  export type carritoItemUpdateManyWithWhereWithoutCarritoInput = {
    where: carritoItemScalarWhereInput
    data: XOR<carritoItemUpdateManyMutationInput, carritoItemUncheckedUpdateManyWithoutCarritoInput>
  }

  export type carritoCreateWithoutItemsInput = {
    creadoEn?: Date | string
    cerrado?: boolean
  }

  export type carritoUncheckedCreateWithoutItemsInput = {
    id?: number
    creadoEn?: Date | string
    cerrado?: boolean
  }

  export type carritoCreateOrConnectWithoutItemsInput = {
    where: carritoWhereUniqueInput
    create: XOR<carritoCreateWithoutItemsInput, carritoUncheckedCreateWithoutItemsInput>
  }

  export type productoCreateWithoutItemsCarritoInput = {
    nombre: string
    descripcion: string
    clasificacion: string
    precio: number
  }

  export type productoUncheckedCreateWithoutItemsCarritoInput = {
    id?: number
    nombre: string
    descripcion: string
    clasificacion: string
    precio: number
  }

  export type productoCreateOrConnectWithoutItemsCarritoInput = {
    where: productoWhereUniqueInput
    create: XOR<productoCreateWithoutItemsCarritoInput, productoUncheckedCreateWithoutItemsCarritoInput>
  }

  export type carritoUpsertWithoutItemsInput = {
    update: XOR<carritoUpdateWithoutItemsInput, carritoUncheckedUpdateWithoutItemsInput>
    create: XOR<carritoCreateWithoutItemsInput, carritoUncheckedCreateWithoutItemsInput>
    where?: carritoWhereInput
  }

  export type carritoUpdateToOneWithWhereWithoutItemsInput = {
    where?: carritoWhereInput
    data: XOR<carritoUpdateWithoutItemsInput, carritoUncheckedUpdateWithoutItemsInput>
  }

  export type carritoUpdateWithoutItemsInput = {
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cerrado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type carritoUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cerrado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type productoUpsertWithoutItemsCarritoInput = {
    update: XOR<productoUpdateWithoutItemsCarritoInput, productoUncheckedUpdateWithoutItemsCarritoInput>
    create: XOR<productoCreateWithoutItemsCarritoInput, productoUncheckedCreateWithoutItemsCarritoInput>
    where?: productoWhereInput
  }

  export type productoUpdateToOneWithWhereWithoutItemsCarritoInput = {
    where?: productoWhereInput
    data: XOR<productoUpdateWithoutItemsCarritoInput, productoUncheckedUpdateWithoutItemsCarritoInput>
  }

  export type productoUpdateWithoutItemsCarritoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    clasificacion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type productoUncheckedUpdateWithoutItemsCarritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    clasificacion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type carritoItemCreateManyProductoInput = {
    carritoId: number
    cantidad?: number
  }

  export type carritoItemUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    carrito?: carritoUpdateOneRequiredWithoutItemsNestedInput
  }

  export type carritoItemUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    carritoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type carritoItemUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    carritoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type carritoItemCreateManyCarritoInput = {
    productoId: number
    cantidad?: number
  }

  export type carritoItemUpdateWithoutCarritoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    producto?: productoUpdateOneRequiredWithoutItemsCarritoNestedInput
  }

  export type carritoItemUncheckedUpdateWithoutCarritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type carritoItemUncheckedUpdateManyWithoutCarritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}