
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model UserChallenge
 * 
 */
export type UserChallenge = $Result.DefaultSelection<Prisma.$UserChallengePayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model UserBadge
 * 
 */
export type UserBadge = $Result.DefaultSelection<Prisma.$UserBadgePayload>
/**
 * Model SortEvent
 * 
 */
export type SortEvent = $Result.DefaultSelection<Prisma.$SortEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userChallenge`: Exposes CRUD operations for the **UserChallenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserChallenges
    * const userChallenges = await prisma.userChallenge.findMany()
    * ```
    */
  get userChallenge(): Prisma.UserChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBadge`: Exposes CRUD operations for the **UserBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBadges
    * const userBadges = await prisma.userBadge.findMany()
    * ```
    */
  get userBadge(): Prisma.UserBadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sortEvent`: Exposes CRUD operations for the **SortEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SortEvents
    * const sortEvents = await prisma.sortEvent.findMany()
    * ```
    */
  get sortEvent(): Prisma.SortEventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Challenge: 'Challenge',
    UserChallenge: 'UserChallenge',
    Badge: 'Badge',
    UserBadge: 'UserBadge',
    SortEvent: 'SortEvent'
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
      modelProps: "user" | "challenge" | "userChallenge" | "badge" | "userBadge" | "sortEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      UserChallenge: {
        payload: Prisma.$UserChallengePayload<ExtArgs>
        fields: Prisma.UserChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          findFirst: {
            args: Prisma.UserChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          findMany: {
            args: Prisma.UserChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          create: {
            args: Prisma.UserChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          createMany: {
            args: Prisma.UserChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          delete: {
            args: Prisma.UserChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          update: {
            args: Prisma.UserChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          deleteMany: {
            args: Prisma.UserChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          upsert: {
            args: Prisma.UserChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          aggregate: {
            args: Prisma.UserChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserChallenge>
          }
          groupBy: {
            args: Prisma.UserChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<UserChallengeCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      UserBadge: {
        payload: Prisma.$UserBadgePayload<ExtArgs>
        fields: Prisma.UserBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findFirst: {
            args: Prisma.UserBadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findMany: {
            args: Prisma.UserBadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          create: {
            args: Prisma.UserBadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          createMany: {
            args: Prisma.UserBadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          delete: {
            args: Prisma.UserBadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          update: {
            args: Prisma.UserBadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          deleteMany: {
            args: Prisma.UserBadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          upsert: {
            args: Prisma.UserBadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          aggregate: {
            args: Prisma.UserBadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBadge>
          }
          groupBy: {
            args: Prisma.UserBadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBadgeCountArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeCountAggregateOutputType> | number
          }
        }
      }
      SortEvent: {
        payload: Prisma.$SortEventPayload<ExtArgs>
        fields: Prisma.SortEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SortEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SortEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortEventPayload>
          }
          findFirst: {
            args: Prisma.SortEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SortEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortEventPayload>
          }
          findMany: {
            args: Prisma.SortEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortEventPayload>[]
          }
          create: {
            args: Prisma.SortEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortEventPayload>
          }
          createMany: {
            args: Prisma.SortEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SortEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortEventPayload>[]
          }
          delete: {
            args: Prisma.SortEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortEventPayload>
          }
          update: {
            args: Prisma.SortEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortEventPayload>
          }
          deleteMany: {
            args: Prisma.SortEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SortEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SortEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortEventPayload>[]
          }
          upsert: {
            args: Prisma.SortEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortEventPayload>
          }
          aggregate: {
            args: Prisma.SortEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSortEvent>
          }
          groupBy: {
            args: Prisma.SortEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SortEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.SortEventCountArgs<ExtArgs>
            result: $Utils.Optional<SortEventCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    challenge?: ChallengeOmit
    userChallenge?: UserChallengeOmit
    badge?: BadgeOmit
    userBadge?: UserBadgeOmit
    sortEvent?: SortEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    challenges: number
    badges: number
    sortEvents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | UserCountOutputTypeCountChallengesArgs
    badges?: boolean | UserCountOutputTypeCountBadgesArgs
    sortEvents?: boolean | UserCountOutputTypeCountSortEventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSortEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SortEventWhereInput
  }


  /**
   * Count Type ChallengeCountOutputType
   */

  export type ChallengeCountOutputType = {
    userChallenges: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userChallenges?: boolean | ChallengeCountOutputTypeCountUserChallengesArgs
  }

  // Custom InputTypes
  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCountOutputType
     */
    select?: ChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountUserChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
  }


  /**
   * Count Type BadgeCountOutputType
   */

  export type BadgeCountOutputType = {
    userBadges: number
  }

  export type BadgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBadges?: boolean | BadgeCountOutputTypeCountUserBadgesArgs
  }

  // Custom InputTypes
  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeCountOutputType
     */
    select?: BadgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeCountUserBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    totalPoints: number | null
    badgeLevel: number | null
    itemsSorted: number | null
    challengesCompleted: number | null
    currentStreak: number | null
  }

  export type UserSumAggregateOutputType = {
    totalPoints: number | null
    badgeLevel: number | null
    itemsSorted: number | null
    challengesCompleted: number | null
    currentStreak: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    name: string | null
    email: string | null
    profileImage: string | null
    totalPoints: number | null
    badgeLevel: number | null
    itemsSorted: number | null
    challengesCompleted: number | null
    currentStreak: number | null
    lastSortEventDate: Date | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    onboarded: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    name: string | null
    email: string | null
    profileImage: string | null
    totalPoints: number | null
    badgeLevel: number | null
    itemsSorted: number | null
    challengesCompleted: number | null
    currentStreak: number | null
    lastSortEventDate: Date | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    onboarded: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    walletAddress: number
    name: number
    email: number
    profileImage: number
    totalPoints: number
    badgeLevel: number
    itemsSorted: number
    challengesCompleted: number
    currentStreak: number
    lastSortEventDate: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    onboarded: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    totalPoints?: true
    badgeLevel?: true
    itemsSorted?: true
    challengesCompleted?: true
    currentStreak?: true
  }

  export type UserSumAggregateInputType = {
    totalPoints?: true
    badgeLevel?: true
    itemsSorted?: true
    challengesCompleted?: true
    currentStreak?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    walletAddress?: true
    name?: true
    email?: true
    profileImage?: true
    totalPoints?: true
    badgeLevel?: true
    itemsSorted?: true
    challengesCompleted?: true
    currentStreak?: true
    lastSortEventDate?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    onboarded?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    walletAddress?: true
    name?: true
    email?: true
    profileImage?: true
    totalPoints?: true
    badgeLevel?: true
    itemsSorted?: true
    challengesCompleted?: true
    currentStreak?: true
    lastSortEventDate?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    onboarded?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    walletAddress?: true
    name?: true
    email?: true
    profileImage?: true
    totalPoints?: true
    badgeLevel?: true
    itemsSorted?: true
    challengesCompleted?: true
    currentStreak?: true
    lastSortEventDate?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    onboarded?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    walletAddress: string
    name: string | null
    email: string | null
    profileImage: string | null
    totalPoints: number
    badgeLevel: number
    itemsSorted: number
    challengesCompleted: number
    currentStreak: number
    lastSortEventDate: Date | null
    lastLogin: Date
    createdAt: Date
    updatedAt: Date
    onboarded: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    name?: boolean
    email?: boolean
    profileImage?: boolean
    totalPoints?: boolean
    badgeLevel?: boolean
    itemsSorted?: boolean
    challengesCompleted?: boolean
    currentStreak?: boolean
    lastSortEventDate?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    onboarded?: boolean
    challenges?: boolean | User$challengesArgs<ExtArgs>
    badges?: boolean | User$badgesArgs<ExtArgs>
    sortEvents?: boolean | User$sortEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    name?: boolean
    email?: boolean
    profileImage?: boolean
    totalPoints?: boolean
    badgeLevel?: boolean
    itemsSorted?: boolean
    challengesCompleted?: boolean
    currentStreak?: boolean
    lastSortEventDate?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    onboarded?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    name?: boolean
    email?: boolean
    profileImage?: boolean
    totalPoints?: boolean
    badgeLevel?: boolean
    itemsSorted?: boolean
    challengesCompleted?: boolean
    currentStreak?: boolean
    lastSortEventDate?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    onboarded?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    walletAddress?: boolean
    name?: boolean
    email?: boolean
    profileImage?: boolean
    totalPoints?: boolean
    badgeLevel?: boolean
    itemsSorted?: boolean
    challengesCompleted?: boolean
    currentStreak?: boolean
    lastSortEventDate?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    onboarded?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletAddress" | "name" | "email" | "profileImage" | "totalPoints" | "badgeLevel" | "itemsSorted" | "challengesCompleted" | "currentStreak" | "lastSortEventDate" | "lastLogin" | "createdAt" | "updatedAt" | "onboarded", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | User$challengesArgs<ExtArgs>
    badges?: boolean | User$badgesArgs<ExtArgs>
    sortEvents?: boolean | User$sortEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      challenges: Prisma.$UserChallengePayload<ExtArgs>[]
      badges: Prisma.$UserBadgePayload<ExtArgs>[]
      sortEvents: Prisma.$SortEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletAddress: string
      name: string | null
      email: string | null
      profileImage: string | null
      totalPoints: number
      badgeLevel: number
      itemsSorted: number
      challengesCompleted: number
      currentStreak: number
      lastSortEventDate: Date | null
      lastLogin: Date
      createdAt: Date
      updatedAt: Date
      onboarded: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenges<T extends User$challengesArgs<ExtArgs> = {}>(args?: Subset<T, User$challengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    badges<T extends User$badgesArgs<ExtArgs> = {}>(args?: Subset<T, User$badgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sortEvents<T extends User$sortEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$sortEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SortEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly totalPoints: FieldRef<"User", 'Int'>
    readonly badgeLevel: FieldRef<"User", 'Int'>
    readonly itemsSorted: FieldRef<"User", 'Int'>
    readonly challengesCompleted: FieldRef<"User", 'Int'>
    readonly currentStreak: FieldRef<"User", 'Int'>
    readonly lastSortEventDate: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly onboarded: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.challenges
   */
  export type User$challengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    cursor?: UserChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * User.badges
   */
  export type User$badgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * User.sortEvents
   */
  export type User$sortEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventInclude<ExtArgs> | null
    where?: SortEventWhereInput
    orderBy?: SortEventOrderByWithRelationInput | SortEventOrderByWithRelationInput[]
    cursor?: SortEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SortEventScalarFieldEnum | SortEventScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    goal: number | null
    rewardPoints: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    goal: number | null
    rewardPoints: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    goal: number | null
    rewardPoints: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    goal: number | null
    rewardPoints: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    goal: number
    rewardPoints: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    goal?: true
    rewardPoints?: true
  }

  export type ChallengeSumAggregateInputType = {
    goal?: true
    rewardPoints?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    goal?: true
    rewardPoints?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    goal?: true
    rewardPoints?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    goal?: true
    rewardPoints?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: string
    title: string
    description: string
    goal: number
    rewardPoints: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    goal?: boolean
    rewardPoints?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userChallenges?: boolean | Challenge$userChallengesArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    goal?: boolean
    rewardPoints?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    goal?: boolean
    rewardPoints?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    goal?: boolean
    rewardPoints?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "goal" | "rewardPoints" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["challenge"]>
  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userChallenges?: boolean | Challenge$userChallengesArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      userChallenges: Prisma.$UserChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      goal: number
      rewardPoints: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {ChallengeCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {ChallengeUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
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
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userChallenges<T extends Challenge$userChallengesArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$userChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Challenge model
   */
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'String'>
    readonly title: FieldRef<"Challenge", 'String'>
    readonly description: FieldRef<"Challenge", 'String'>
    readonly goal: FieldRef<"Challenge", 'Int'>
    readonly rewardPoints: FieldRef<"Challenge", 'Int'>
    readonly isActive: FieldRef<"Challenge", 'Boolean'>
    readonly createdAt: FieldRef<"Challenge", 'DateTime'>
    readonly updatedAt: FieldRef<"Challenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge createManyAndReturn
   */
  export type ChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge updateManyAndReturn
   */
  export type ChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to delete.
     */
    limit?: number
  }

  /**
   * Challenge.userChallenges
   */
  export type Challenge$userChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    cursor?: UserChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model UserChallenge
   */

  export type AggregateUserChallenge = {
    _count: UserChallengeCountAggregateOutputType | null
    _avg: UserChallengeAvgAggregateOutputType | null
    _sum: UserChallengeSumAggregateOutputType | null
    _min: UserChallengeMinAggregateOutputType | null
    _max: UserChallengeMaxAggregateOutputType | null
  }

  export type UserChallengeAvgAggregateOutputType = {
    progress: number | null
  }

  export type UserChallengeSumAggregateOutputType = {
    progress: number | null
  }

  export type UserChallengeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    challengeId: string | null
    progress: number | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserChallengeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    challengeId: string | null
    progress: number | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserChallengeCountAggregateOutputType = {
    id: number
    userId: number
    challengeId: number
    progress: number
    isCompleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserChallengeAvgAggregateInputType = {
    progress?: true
  }

  export type UserChallengeSumAggregateInputType = {
    progress?: true
  }

  export type UserChallengeMinAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    progress?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserChallengeMaxAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    progress?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserChallengeCountAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    progress?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChallenge to aggregate.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserChallenges
    **/
    _count?: true | UserChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserChallengeMaxAggregateInputType
  }

  export type GetUserChallengeAggregateType<T extends UserChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserChallenge[P]>
      : GetScalarType<T[P], AggregateUserChallenge[P]>
  }




  export type UserChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithAggregationInput | UserChallengeOrderByWithAggregationInput[]
    by: UserChallengeScalarFieldEnum[] | UserChallengeScalarFieldEnum
    having?: UserChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserChallengeCountAggregateInputType | true
    _avg?: UserChallengeAvgAggregateInputType
    _sum?: UserChallengeSumAggregateInputType
    _min?: UserChallengeMinAggregateInputType
    _max?: UserChallengeMaxAggregateInputType
  }

  export type UserChallengeGroupByOutputType = {
    id: string
    userId: string
    challengeId: string
    progress: number
    isCompleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserChallengeCountAggregateOutputType | null
    _avg: UserChallengeAvgAggregateOutputType | null
    _sum: UserChallengeSumAggregateOutputType | null
    _min: UserChallengeMinAggregateOutputType | null
    _max: UserChallengeMaxAggregateOutputType | null
  }

  type GetUserChallengeGroupByPayload<T extends UserChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], UserChallengeGroupByOutputType[P]>
        }
      >
    >


  export type UserChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    progress?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    progress?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    progress?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectScalar = {
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    progress?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "challengeId" | "progress" | "isCompleted" | "createdAt" | "updatedAt", ExtArgs["result"]["userChallenge"]>
  export type UserChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type UserChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type UserChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $UserChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserChallenge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      challenge: Prisma.$ChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      challengeId: string
      progress: number
      isCompleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userChallenge"]>
    composites: {}
  }

  type UserChallengeGetPayload<S extends boolean | null | undefined | UserChallengeDefaultArgs> = $Result.GetResult<Prisma.$UserChallengePayload, S>

  type UserChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserChallengeCountAggregateInputType | true
    }

  export interface UserChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserChallenge'], meta: { name: 'UserChallenge' } }
    /**
     * Find zero or one UserChallenge that matches the filter.
     * @param {UserChallengeFindUniqueArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserChallengeFindUniqueArgs>(args: SelectSubset<T, UserChallengeFindUniqueArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserChallenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserChallengeFindUniqueOrThrowArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindFirstArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserChallengeFindFirstArgs>(args?: SelectSubset<T, UserChallengeFindFirstArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindFirstOrThrowArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserChallenges
     * const userChallenges = await prisma.userChallenge.findMany()
     * 
     * // Get first 10 UserChallenges
     * const userChallenges = await prisma.userChallenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserChallengeFindManyArgs>(args?: SelectSubset<T, UserChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserChallenge.
     * @param {UserChallengeCreateArgs} args - Arguments to create a UserChallenge.
     * @example
     * // Create one UserChallenge
     * const UserChallenge = await prisma.userChallenge.create({
     *   data: {
     *     // ... data to create a UserChallenge
     *   }
     * })
     * 
     */
    create<T extends UserChallengeCreateArgs>(args: SelectSubset<T, UserChallengeCreateArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserChallenges.
     * @param {UserChallengeCreateManyArgs} args - Arguments to create many UserChallenges.
     * @example
     * // Create many UserChallenges
     * const userChallenge = await prisma.userChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserChallengeCreateManyArgs>(args?: SelectSubset<T, UserChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserChallenges and returns the data saved in the database.
     * @param {UserChallengeCreateManyAndReturnArgs} args - Arguments to create many UserChallenges.
     * @example
     * // Create many UserChallenges
     * const userChallenge = await prisma.userChallenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserChallenges and only return the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserChallenge.
     * @param {UserChallengeDeleteArgs} args - Arguments to delete one UserChallenge.
     * @example
     * // Delete one UserChallenge
     * const UserChallenge = await prisma.userChallenge.delete({
     *   where: {
     *     // ... filter to delete one UserChallenge
     *   }
     * })
     * 
     */
    delete<T extends UserChallengeDeleteArgs>(args: SelectSubset<T, UserChallengeDeleteArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserChallenge.
     * @param {UserChallengeUpdateArgs} args - Arguments to update one UserChallenge.
     * @example
     * // Update one UserChallenge
     * const userChallenge = await prisma.userChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserChallengeUpdateArgs>(args: SelectSubset<T, UserChallengeUpdateArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserChallenges.
     * @param {UserChallengeDeleteManyArgs} args - Arguments to filter UserChallenges to delete.
     * @example
     * // Delete a few UserChallenges
     * const { count } = await prisma.userChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserChallengeDeleteManyArgs>(args?: SelectSubset<T, UserChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserChallenges
     * const userChallenge = await prisma.userChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserChallengeUpdateManyArgs>(args: SelectSubset<T, UserChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserChallenges and returns the data updated in the database.
     * @param {UserChallengeUpdateManyAndReturnArgs} args - Arguments to update many UserChallenges.
     * @example
     * // Update many UserChallenges
     * const userChallenge = await prisma.userChallenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserChallenges and only return the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserChallenge.
     * @param {UserChallengeUpsertArgs} args - Arguments to update or create a UserChallenge.
     * @example
     * // Update or create a UserChallenge
     * const userChallenge = await prisma.userChallenge.upsert({
     *   create: {
     *     // ... data to create a UserChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserChallenge we want to update
     *   }
     * })
     */
    upsert<T extends UserChallengeUpsertArgs>(args: SelectSubset<T, UserChallengeUpsertArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeCountArgs} args - Arguments to filter UserChallenges to count.
     * @example
     * // Count the number of UserChallenges
     * const count = await prisma.userChallenge.count({
     *   where: {
     *     // ... the filter for the UserChallenges we want to count
     *   }
     * })
    **/
    count<T extends UserChallengeCountArgs>(
      args?: Subset<T, UserChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserChallengeAggregateArgs>(args: Subset<T, UserChallengeAggregateArgs>): Prisma.PrismaPromise<GetUserChallengeAggregateType<T>>

    /**
     * Group by UserChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeGroupByArgs} args - Group by arguments.
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
      T extends UserChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserChallengeGroupByArgs['orderBy'] }
        : { orderBy?: UserChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserChallenge model
   */
  readonly fields: UserChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserChallenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserChallenge model
   */
  interface UserChallengeFieldRefs {
    readonly id: FieldRef<"UserChallenge", 'String'>
    readonly userId: FieldRef<"UserChallenge", 'String'>
    readonly challengeId: FieldRef<"UserChallenge", 'String'>
    readonly progress: FieldRef<"UserChallenge", 'Int'>
    readonly isCompleted: FieldRef<"UserChallenge", 'Boolean'>
    readonly createdAt: FieldRef<"UserChallenge", 'DateTime'>
    readonly updatedAt: FieldRef<"UserChallenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserChallenge findUnique
   */
  export type UserChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge findUniqueOrThrow
   */
  export type UserChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge findFirst
   */
  export type UserChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChallenges.
     */
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge findFirstOrThrow
   */
  export type UserChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChallenges.
     */
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge findMany
   */
  export type UserChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenges to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge create
   */
  export type UserChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserChallenge.
     */
    data: XOR<UserChallengeCreateInput, UserChallengeUncheckedCreateInput>
  }

  /**
   * UserChallenge createMany
   */
  export type UserChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserChallenges.
     */
    data: UserChallengeCreateManyInput | UserChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserChallenge createManyAndReturn
   */
  export type UserChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many UserChallenges.
     */
    data: UserChallengeCreateManyInput | UserChallengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserChallenge update
   */
  export type UserChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserChallenge.
     */
    data: XOR<UserChallengeUpdateInput, UserChallengeUncheckedUpdateInput>
    /**
     * Choose, which UserChallenge to update.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge updateMany
   */
  export type UserChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserChallenges.
     */
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyInput>
    /**
     * Filter which UserChallenges to update
     */
    where?: UserChallengeWhereInput
    /**
     * Limit how many UserChallenges to update.
     */
    limit?: number
  }

  /**
   * UserChallenge updateManyAndReturn
   */
  export type UserChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * The data used to update UserChallenges.
     */
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyInput>
    /**
     * Filter which UserChallenges to update
     */
    where?: UserChallengeWhereInput
    /**
     * Limit how many UserChallenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserChallenge upsert
   */
  export type UserChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserChallenge to update in case it exists.
     */
    where: UserChallengeWhereUniqueInput
    /**
     * In case the UserChallenge found by the `where` argument doesn't exist, create a new UserChallenge with this data.
     */
    create: XOR<UserChallengeCreateInput, UserChallengeUncheckedCreateInput>
    /**
     * In case the UserChallenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserChallengeUpdateInput, UserChallengeUncheckedUpdateInput>
  }

  /**
   * UserChallenge delete
   */
  export type UserChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter which UserChallenge to delete.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge deleteMany
   */
  export type UserChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChallenges to delete
     */
    where?: UserChallengeWhereInput
    /**
     * Limit how many UserChallenges to delete.
     */
    limit?: number
  }

  /**
   * UserChallenge without action
   */
  export type UserChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    requiredPoints: number | null
  }

  export type BadgeSumAggregateOutputType = {
    requiredPoints: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    requiredPoints: number | null
    nftTokenId: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    requiredPoints: number | null
    nftTokenId: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    requiredPoints: number
    nftTokenId: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    requiredPoints?: true
  }

  export type BadgeSumAggregateInputType = {
    requiredPoints?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    requiredPoints?: true
    nftTokenId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    requiredPoints?: true
    nftTokenId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    requiredPoints?: true
    nftTokenId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: string
    name: string
    description: string
    requiredPoints: number
    nftTokenId: string | null
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    requiredPoints?: boolean
    nftTokenId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBadges?: boolean | Badge$userBadgesArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    requiredPoints?: boolean
    nftTokenId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    requiredPoints?: boolean
    nftTokenId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    requiredPoints?: boolean
    nftTokenId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "requiredPoints" | "nftTokenId" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["badge"]>
  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBadges?: boolean | Badge$userBadgesArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      userBadges: Prisma.$UserBadgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      requiredPoints: number
      nftTokenId: string | null
      imageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Badges and returns the data saved in the database.
     * @param {BadgeCreateManyAndReturnArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, BadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges and returns the data updated in the database.
     * @param {BadgeUpdateManyAndReturnArgs} args - Arguments to update many Badges.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, BadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
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
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBadges<T extends Badge$userBadgesArgs<ExtArgs> = {}>(args?: Subset<T, Badge$userBadgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Badge model
   */
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'String'>
    readonly name: FieldRef<"Badge", 'String'>
    readonly description: FieldRef<"Badge", 'String'>
    readonly requiredPoints: FieldRef<"Badge", 'Int'>
    readonly nftTokenId: FieldRef<"Badge", 'String'>
    readonly imageUrl: FieldRef<"Badge", 'String'>
    readonly createdAt: FieldRef<"Badge", 'DateTime'>
    readonly updatedAt: FieldRef<"Badge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge createManyAndReturn
   */
  export type BadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge updateManyAndReturn
   */
  export type BadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to delete.
     */
    limit?: number
  }

  /**
   * Badge.userBadges
   */
  export type Badge$userBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


  /**
   * Model UserBadge
   */

  export type AggregateUserBadge = {
    _count: UserBadgeCountAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  export type UserBadgeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    badgeId: string | null
    minted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserBadgeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    badgeId: string | null
    minted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserBadgeCountAggregateOutputType = {
    id: number
    userId: number
    badgeId: number
    minted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserBadgeMinAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    minted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserBadgeMaxAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    minted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserBadgeCountAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    minted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadge to aggregate.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBadges
    **/
    _count?: true | UserBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBadgeMaxAggregateInputType
  }

  export type GetUserBadgeAggregateType<T extends UserBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBadge[P]>
      : GetScalarType<T[P], AggregateUserBadge[P]>
  }




  export type UserBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithAggregationInput | UserBadgeOrderByWithAggregationInput[]
    by: UserBadgeScalarFieldEnum[] | UserBadgeScalarFieldEnum
    having?: UserBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBadgeCountAggregateInputType | true
    _min?: UserBadgeMinAggregateInputType
    _max?: UserBadgeMaxAggregateInputType
  }

  export type UserBadgeGroupByOutputType = {
    id: string
    userId: string
    badgeId: string
    minted: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserBadgeCountAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  type GetUserBadgeGroupByPayload<T extends UserBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
        }
      >
    >


  export type UserBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    minted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    minted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    minted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectScalar = {
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    minted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserBadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "badgeId" | "minted" | "createdAt" | "updatedAt", ExtArgs["result"]["userBadge"]>
  export type UserBadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }

  export type $UserBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBadge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      badge: Prisma.$BadgePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      badgeId: string
      minted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userBadge"]>
    composites: {}
  }

  type UserBadgeGetPayload<S extends boolean | null | undefined | UserBadgeDefaultArgs> = $Result.GetResult<Prisma.$UserBadgePayload, S>

  type UserBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBadgeCountAggregateInputType | true
    }

  export interface UserBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBadge'], meta: { name: 'UserBadge' } }
    /**
     * Find zero or one UserBadge that matches the filter.
     * @param {UserBadgeFindUniqueArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBadgeFindUniqueArgs>(args: SelectSubset<T, UserBadgeFindUniqueArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBadge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBadgeFindUniqueOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBadgeFindFirstArgs>(args?: SelectSubset<T, UserBadgeFindFirstArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBadges
     * const userBadges = await prisma.userBadge.findMany()
     * 
     * // Get first 10 UserBadges
     * const userBadges = await prisma.userBadge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBadgeFindManyArgs>(args?: SelectSubset<T, UserBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBadge.
     * @param {UserBadgeCreateArgs} args - Arguments to create a UserBadge.
     * @example
     * // Create one UserBadge
     * const UserBadge = await prisma.userBadge.create({
     *   data: {
     *     // ... data to create a UserBadge
     *   }
     * })
     * 
     */
    create<T extends UserBadgeCreateArgs>(args: SelectSubset<T, UserBadgeCreateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBadges.
     * @param {UserBadgeCreateManyArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBadgeCreateManyArgs>(args?: SelectSubset<T, UserBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBadges and returns the data saved in the database.
     * @param {UserBadgeCreateManyAndReturnArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBadges and only return the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBadge.
     * @param {UserBadgeDeleteArgs} args - Arguments to delete one UserBadge.
     * @example
     * // Delete one UserBadge
     * const UserBadge = await prisma.userBadge.delete({
     *   where: {
     *     // ... filter to delete one UserBadge
     *   }
     * })
     * 
     */
    delete<T extends UserBadgeDeleteArgs>(args: SelectSubset<T, UserBadgeDeleteArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBadge.
     * @param {UserBadgeUpdateArgs} args - Arguments to update one UserBadge.
     * @example
     * // Update one UserBadge
     * const userBadge = await prisma.userBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBadgeUpdateArgs>(args: SelectSubset<T, UserBadgeUpdateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBadges.
     * @param {UserBadgeDeleteManyArgs} args - Arguments to filter UserBadges to delete.
     * @example
     * // Delete a few UserBadges
     * const { count } = await prisma.userBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBadgeDeleteManyArgs>(args?: SelectSubset<T, UserBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBadgeUpdateManyArgs>(args: SelectSubset<T, UserBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges and returns the data updated in the database.
     * @param {UserBadgeUpdateManyAndReturnArgs} args - Arguments to update many UserBadges.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBadges and only return the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserBadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBadge.
     * @param {UserBadgeUpsertArgs} args - Arguments to update or create a UserBadge.
     * @example
     * // Update or create a UserBadge
     * const userBadge = await prisma.userBadge.upsert({
     *   create: {
     *     // ... data to create a UserBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBadge we want to update
     *   }
     * })
     */
    upsert<T extends UserBadgeUpsertArgs>(args: SelectSubset<T, UserBadgeUpsertArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeCountArgs} args - Arguments to filter UserBadges to count.
     * @example
     * // Count the number of UserBadges
     * const count = await prisma.userBadge.count({
     *   where: {
     *     // ... the filter for the UserBadges we want to count
     *   }
     * })
    **/
    count<T extends UserBadgeCountArgs>(
      args?: Subset<T, UserBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBadgeAggregateArgs>(args: Subset<T, UserBadgeAggregateArgs>): Prisma.PrismaPromise<GetUserBadgeAggregateType<T>>

    /**
     * Group by UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeGroupByArgs} args - Group by arguments.
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
      T extends UserBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBadgeGroupByArgs['orderBy'] }
        : { orderBy?: UserBadgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBadge model
   */
  readonly fields: UserBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    badge<T extends BadgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefaultArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserBadge model
   */
  interface UserBadgeFieldRefs {
    readonly id: FieldRef<"UserBadge", 'String'>
    readonly userId: FieldRef<"UserBadge", 'String'>
    readonly badgeId: FieldRef<"UserBadge", 'String'>
    readonly minted: FieldRef<"UserBadge", 'Boolean'>
    readonly createdAt: FieldRef<"UserBadge", 'DateTime'>
    readonly updatedAt: FieldRef<"UserBadge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBadge findUnique
   */
  export type UserBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findUniqueOrThrow
   */
  export type UserBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findFirst
   */
  export type UserBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findFirstOrThrow
   */
  export type UserBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findMany
   */
  export type UserBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge create
   */
  export type UserBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBadge.
     */
    data: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
  }

  /**
   * UserBadge createMany
   */
  export type UserBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBadge createManyAndReturn
   */
  export type UserBadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge update
   */
  export type UserBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBadge.
     */
    data: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
    /**
     * Choose, which UserBadge to update.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge updateMany
   */
  export type UserBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to update.
     */
    limit?: number
  }

  /**
   * UserBadge updateManyAndReturn
   */
  export type UserBadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge upsert
   */
  export type UserBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBadge to update in case it exists.
     */
    where: UserBadgeWhereUniqueInput
    /**
     * In case the UserBadge found by the `where` argument doesn't exist, create a new UserBadge with this data.
     */
    create: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
    /**
     * In case the UserBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
  }

  /**
   * UserBadge delete
   */
  export type UserBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter which UserBadge to delete.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge deleteMany
   */
  export type UserBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadges to delete
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to delete.
     */
    limit?: number
  }

  /**
   * UserBadge without action
   */
  export type UserBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
  }


  /**
   * Model SortEvent
   */

  export type AggregateSortEvent = {
    _count: SortEventCountAggregateOutputType | null
    _avg: SortEventAvgAggregateOutputType | null
    _sum: SortEventSumAggregateOutputType | null
    _min: SortEventMinAggregateOutputType | null
    _max: SortEventMaxAggregateOutputType | null
  }

  export type SortEventAvgAggregateOutputType = {
    pointsEarned: number | null
  }

  export type SortEventSumAggregateOutputType = {
    pointsEarned: number | null
  }

  export type SortEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    itemType: string | null
    pointsEarned: number | null
    createdAt: Date | null
  }

  export type SortEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    itemType: string | null
    pointsEarned: number | null
    createdAt: Date | null
  }

  export type SortEventCountAggregateOutputType = {
    id: number
    userId: number
    itemType: number
    pointsEarned: number
    createdAt: number
    _all: number
  }


  export type SortEventAvgAggregateInputType = {
    pointsEarned?: true
  }

  export type SortEventSumAggregateInputType = {
    pointsEarned?: true
  }

  export type SortEventMinAggregateInputType = {
    id?: true
    userId?: true
    itemType?: true
    pointsEarned?: true
    createdAt?: true
  }

  export type SortEventMaxAggregateInputType = {
    id?: true
    userId?: true
    itemType?: true
    pointsEarned?: true
    createdAt?: true
  }

  export type SortEventCountAggregateInputType = {
    id?: true
    userId?: true
    itemType?: true
    pointsEarned?: true
    createdAt?: true
    _all?: true
  }

  export type SortEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SortEvent to aggregate.
     */
    where?: SortEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SortEvents to fetch.
     */
    orderBy?: SortEventOrderByWithRelationInput | SortEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SortEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SortEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SortEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SortEvents
    **/
    _count?: true | SortEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SortEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SortEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SortEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SortEventMaxAggregateInputType
  }

  export type GetSortEventAggregateType<T extends SortEventAggregateArgs> = {
        [P in keyof T & keyof AggregateSortEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSortEvent[P]>
      : GetScalarType<T[P], AggregateSortEvent[P]>
  }




  export type SortEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SortEventWhereInput
    orderBy?: SortEventOrderByWithAggregationInput | SortEventOrderByWithAggregationInput[]
    by: SortEventScalarFieldEnum[] | SortEventScalarFieldEnum
    having?: SortEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SortEventCountAggregateInputType | true
    _avg?: SortEventAvgAggregateInputType
    _sum?: SortEventSumAggregateInputType
    _min?: SortEventMinAggregateInputType
    _max?: SortEventMaxAggregateInputType
  }

  export type SortEventGroupByOutputType = {
    id: string
    userId: string
    itemType: string
    pointsEarned: number
    createdAt: Date
    _count: SortEventCountAggregateOutputType | null
    _avg: SortEventAvgAggregateOutputType | null
    _sum: SortEventSumAggregateOutputType | null
    _min: SortEventMinAggregateOutputType | null
    _max: SortEventMaxAggregateOutputType | null
  }

  type GetSortEventGroupByPayload<T extends SortEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SortEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SortEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SortEventGroupByOutputType[P]>
            : GetScalarType<T[P], SortEventGroupByOutputType[P]>
        }
      >
    >


  export type SortEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemType?: boolean
    pointsEarned?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sortEvent"]>

  export type SortEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemType?: boolean
    pointsEarned?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sortEvent"]>

  export type SortEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemType?: boolean
    pointsEarned?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sortEvent"]>

  export type SortEventSelectScalar = {
    id?: boolean
    userId?: boolean
    itemType?: boolean
    pointsEarned?: boolean
    createdAt?: boolean
  }

  export type SortEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "itemType" | "pointsEarned" | "createdAt", ExtArgs["result"]["sortEvent"]>
  export type SortEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SortEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SortEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SortEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SortEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      itemType: string
      pointsEarned: number
      createdAt: Date
    }, ExtArgs["result"]["sortEvent"]>
    composites: {}
  }

  type SortEventGetPayload<S extends boolean | null | undefined | SortEventDefaultArgs> = $Result.GetResult<Prisma.$SortEventPayload, S>

  type SortEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SortEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SortEventCountAggregateInputType | true
    }

  export interface SortEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SortEvent'], meta: { name: 'SortEvent' } }
    /**
     * Find zero or one SortEvent that matches the filter.
     * @param {SortEventFindUniqueArgs} args - Arguments to find a SortEvent
     * @example
     * // Get one SortEvent
     * const sortEvent = await prisma.sortEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SortEventFindUniqueArgs>(args: SelectSubset<T, SortEventFindUniqueArgs<ExtArgs>>): Prisma__SortEventClient<$Result.GetResult<Prisma.$SortEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SortEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SortEventFindUniqueOrThrowArgs} args - Arguments to find a SortEvent
     * @example
     * // Get one SortEvent
     * const sortEvent = await prisma.sortEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SortEventFindUniqueOrThrowArgs>(args: SelectSubset<T, SortEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SortEventClient<$Result.GetResult<Prisma.$SortEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SortEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortEventFindFirstArgs} args - Arguments to find a SortEvent
     * @example
     * // Get one SortEvent
     * const sortEvent = await prisma.sortEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SortEventFindFirstArgs>(args?: SelectSubset<T, SortEventFindFirstArgs<ExtArgs>>): Prisma__SortEventClient<$Result.GetResult<Prisma.$SortEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SortEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortEventFindFirstOrThrowArgs} args - Arguments to find a SortEvent
     * @example
     * // Get one SortEvent
     * const sortEvent = await prisma.sortEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SortEventFindFirstOrThrowArgs>(args?: SelectSubset<T, SortEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__SortEventClient<$Result.GetResult<Prisma.$SortEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SortEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SortEvents
     * const sortEvents = await prisma.sortEvent.findMany()
     * 
     * // Get first 10 SortEvents
     * const sortEvents = await prisma.sortEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sortEventWithIdOnly = await prisma.sortEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SortEventFindManyArgs>(args?: SelectSubset<T, SortEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SortEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SortEvent.
     * @param {SortEventCreateArgs} args - Arguments to create a SortEvent.
     * @example
     * // Create one SortEvent
     * const SortEvent = await prisma.sortEvent.create({
     *   data: {
     *     // ... data to create a SortEvent
     *   }
     * })
     * 
     */
    create<T extends SortEventCreateArgs>(args: SelectSubset<T, SortEventCreateArgs<ExtArgs>>): Prisma__SortEventClient<$Result.GetResult<Prisma.$SortEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SortEvents.
     * @param {SortEventCreateManyArgs} args - Arguments to create many SortEvents.
     * @example
     * // Create many SortEvents
     * const sortEvent = await prisma.sortEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SortEventCreateManyArgs>(args?: SelectSubset<T, SortEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SortEvents and returns the data saved in the database.
     * @param {SortEventCreateManyAndReturnArgs} args - Arguments to create many SortEvents.
     * @example
     * // Create many SortEvents
     * const sortEvent = await prisma.sortEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SortEvents and only return the `id`
     * const sortEventWithIdOnly = await prisma.sortEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SortEventCreateManyAndReturnArgs>(args?: SelectSubset<T, SortEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SortEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SortEvent.
     * @param {SortEventDeleteArgs} args - Arguments to delete one SortEvent.
     * @example
     * // Delete one SortEvent
     * const SortEvent = await prisma.sortEvent.delete({
     *   where: {
     *     // ... filter to delete one SortEvent
     *   }
     * })
     * 
     */
    delete<T extends SortEventDeleteArgs>(args: SelectSubset<T, SortEventDeleteArgs<ExtArgs>>): Prisma__SortEventClient<$Result.GetResult<Prisma.$SortEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SortEvent.
     * @param {SortEventUpdateArgs} args - Arguments to update one SortEvent.
     * @example
     * // Update one SortEvent
     * const sortEvent = await prisma.sortEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SortEventUpdateArgs>(args: SelectSubset<T, SortEventUpdateArgs<ExtArgs>>): Prisma__SortEventClient<$Result.GetResult<Prisma.$SortEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SortEvents.
     * @param {SortEventDeleteManyArgs} args - Arguments to filter SortEvents to delete.
     * @example
     * // Delete a few SortEvents
     * const { count } = await prisma.sortEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SortEventDeleteManyArgs>(args?: SelectSubset<T, SortEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SortEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SortEvents
     * const sortEvent = await prisma.sortEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SortEventUpdateManyArgs>(args: SelectSubset<T, SortEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SortEvents and returns the data updated in the database.
     * @param {SortEventUpdateManyAndReturnArgs} args - Arguments to update many SortEvents.
     * @example
     * // Update many SortEvents
     * const sortEvent = await prisma.sortEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SortEvents and only return the `id`
     * const sortEventWithIdOnly = await prisma.sortEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SortEventUpdateManyAndReturnArgs>(args: SelectSubset<T, SortEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SortEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SortEvent.
     * @param {SortEventUpsertArgs} args - Arguments to update or create a SortEvent.
     * @example
     * // Update or create a SortEvent
     * const sortEvent = await prisma.sortEvent.upsert({
     *   create: {
     *     // ... data to create a SortEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SortEvent we want to update
     *   }
     * })
     */
    upsert<T extends SortEventUpsertArgs>(args: SelectSubset<T, SortEventUpsertArgs<ExtArgs>>): Prisma__SortEventClient<$Result.GetResult<Prisma.$SortEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SortEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortEventCountArgs} args - Arguments to filter SortEvents to count.
     * @example
     * // Count the number of SortEvents
     * const count = await prisma.sortEvent.count({
     *   where: {
     *     // ... the filter for the SortEvents we want to count
     *   }
     * })
    **/
    count<T extends SortEventCountArgs>(
      args?: Subset<T, SortEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SortEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SortEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SortEventAggregateArgs>(args: Subset<T, SortEventAggregateArgs>): Prisma.PrismaPromise<GetSortEventAggregateType<T>>

    /**
     * Group by SortEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortEventGroupByArgs} args - Group by arguments.
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
      T extends SortEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SortEventGroupByArgs['orderBy'] }
        : { orderBy?: SortEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SortEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSortEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SortEvent model
   */
  readonly fields: SortEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SortEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SortEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SortEvent model
   */
  interface SortEventFieldRefs {
    readonly id: FieldRef<"SortEvent", 'String'>
    readonly userId: FieldRef<"SortEvent", 'String'>
    readonly itemType: FieldRef<"SortEvent", 'String'>
    readonly pointsEarned: FieldRef<"SortEvent", 'Int'>
    readonly createdAt: FieldRef<"SortEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SortEvent findUnique
   */
  export type SortEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventInclude<ExtArgs> | null
    /**
     * Filter, which SortEvent to fetch.
     */
    where: SortEventWhereUniqueInput
  }

  /**
   * SortEvent findUniqueOrThrow
   */
  export type SortEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventInclude<ExtArgs> | null
    /**
     * Filter, which SortEvent to fetch.
     */
    where: SortEventWhereUniqueInput
  }

  /**
   * SortEvent findFirst
   */
  export type SortEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventInclude<ExtArgs> | null
    /**
     * Filter, which SortEvent to fetch.
     */
    where?: SortEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SortEvents to fetch.
     */
    orderBy?: SortEventOrderByWithRelationInput | SortEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SortEvents.
     */
    cursor?: SortEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SortEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SortEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SortEvents.
     */
    distinct?: SortEventScalarFieldEnum | SortEventScalarFieldEnum[]
  }

  /**
   * SortEvent findFirstOrThrow
   */
  export type SortEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventInclude<ExtArgs> | null
    /**
     * Filter, which SortEvent to fetch.
     */
    where?: SortEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SortEvents to fetch.
     */
    orderBy?: SortEventOrderByWithRelationInput | SortEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SortEvents.
     */
    cursor?: SortEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SortEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SortEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SortEvents.
     */
    distinct?: SortEventScalarFieldEnum | SortEventScalarFieldEnum[]
  }

  /**
   * SortEvent findMany
   */
  export type SortEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventInclude<ExtArgs> | null
    /**
     * Filter, which SortEvents to fetch.
     */
    where?: SortEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SortEvents to fetch.
     */
    orderBy?: SortEventOrderByWithRelationInput | SortEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SortEvents.
     */
    cursor?: SortEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SortEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SortEvents.
     */
    skip?: number
    distinct?: SortEventScalarFieldEnum | SortEventScalarFieldEnum[]
  }

  /**
   * SortEvent create
   */
  export type SortEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventInclude<ExtArgs> | null
    /**
     * The data needed to create a SortEvent.
     */
    data: XOR<SortEventCreateInput, SortEventUncheckedCreateInput>
  }

  /**
   * SortEvent createMany
   */
  export type SortEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SortEvents.
     */
    data: SortEventCreateManyInput | SortEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SortEvent createManyAndReturn
   */
  export type SortEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * The data used to create many SortEvents.
     */
    data: SortEventCreateManyInput | SortEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SortEvent update
   */
  export type SortEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventInclude<ExtArgs> | null
    /**
     * The data needed to update a SortEvent.
     */
    data: XOR<SortEventUpdateInput, SortEventUncheckedUpdateInput>
    /**
     * Choose, which SortEvent to update.
     */
    where: SortEventWhereUniqueInput
  }

  /**
   * SortEvent updateMany
   */
  export type SortEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SortEvents.
     */
    data: XOR<SortEventUpdateManyMutationInput, SortEventUncheckedUpdateManyInput>
    /**
     * Filter which SortEvents to update
     */
    where?: SortEventWhereInput
    /**
     * Limit how many SortEvents to update.
     */
    limit?: number
  }

  /**
   * SortEvent updateManyAndReturn
   */
  export type SortEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * The data used to update SortEvents.
     */
    data: XOR<SortEventUpdateManyMutationInput, SortEventUncheckedUpdateManyInput>
    /**
     * Filter which SortEvents to update
     */
    where?: SortEventWhereInput
    /**
     * Limit how many SortEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SortEvent upsert
   */
  export type SortEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventInclude<ExtArgs> | null
    /**
     * The filter to search for the SortEvent to update in case it exists.
     */
    where: SortEventWhereUniqueInput
    /**
     * In case the SortEvent found by the `where` argument doesn't exist, create a new SortEvent with this data.
     */
    create: XOR<SortEventCreateInput, SortEventUncheckedCreateInput>
    /**
     * In case the SortEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SortEventUpdateInput, SortEventUncheckedUpdateInput>
  }

  /**
   * SortEvent delete
   */
  export type SortEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventInclude<ExtArgs> | null
    /**
     * Filter which SortEvent to delete.
     */
    where: SortEventWhereUniqueInput
  }

  /**
   * SortEvent deleteMany
   */
  export type SortEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SortEvents to delete
     */
    where?: SortEventWhereInput
    /**
     * Limit how many SortEvents to delete.
     */
    limit?: number
  }

  /**
   * SortEvent without action
   */
  export type SortEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SortEvent
     */
    select?: SortEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SortEvent
     */
    omit?: SortEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    walletAddress: 'walletAddress',
    name: 'name',
    email: 'email',
    profileImage: 'profileImage',
    totalPoints: 'totalPoints',
    badgeLevel: 'badgeLevel',
    itemsSorted: 'itemsSorted',
    challengesCompleted: 'challengesCompleted',
    currentStreak: 'currentStreak',
    lastSortEventDate: 'lastSortEventDate',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    onboarded: 'onboarded'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    goal: 'goal',
    rewardPoints: 'rewardPoints',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const UserChallengeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    challengeId: 'challengeId',
    progress: 'progress',
    isCompleted: 'isCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserChallengeScalarFieldEnum = (typeof UserChallengeScalarFieldEnum)[keyof typeof UserChallengeScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    requiredPoints: 'requiredPoints',
    nftTokenId: 'nftTokenId',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const UserBadgeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    badgeId: 'badgeId',
    minted: 'minted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserBadgeScalarFieldEnum = (typeof UserBadgeScalarFieldEnum)[keyof typeof UserBadgeScalarFieldEnum]


  export const SortEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    itemType: 'itemType',
    pointsEarned: 'pointsEarned',
    createdAt: 'createdAt'
  };

  export type SortEventScalarFieldEnum = (typeof SortEventScalarFieldEnum)[keyof typeof SortEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    walletAddress?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    totalPoints?: IntFilter<"User"> | number
    badgeLevel?: IntFilter<"User"> | number
    itemsSorted?: IntFilter<"User"> | number
    challengesCompleted?: IntFilter<"User"> | number
    currentStreak?: IntFilter<"User"> | number
    lastSortEventDate?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLogin?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    onboarded?: BoolFilter<"User"> | boolean
    challenges?: UserChallengeListRelationFilter
    badges?: UserBadgeListRelationFilter
    sortEvents?: SortEventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    totalPoints?: SortOrder
    badgeLevel?: SortOrder
    itemsSorted?: SortOrder
    challengesCompleted?: SortOrder
    currentStreak?: SortOrder
    lastSortEventDate?: SortOrderInput | SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    onboarded?: SortOrder
    challenges?: UserChallengeOrderByRelationAggregateInput
    badges?: UserBadgeOrderByRelationAggregateInput
    sortEvents?: SortEventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAddress?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    totalPoints?: IntFilter<"User"> | number
    badgeLevel?: IntFilter<"User"> | number
    itemsSorted?: IntFilter<"User"> | number
    challengesCompleted?: IntFilter<"User"> | number
    currentStreak?: IntFilter<"User"> | number
    lastSortEventDate?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLogin?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    onboarded?: BoolFilter<"User"> | boolean
    challenges?: UserChallengeListRelationFilter
    badges?: UserBadgeListRelationFilter
    sortEvents?: SortEventListRelationFilter
  }, "id" | "walletAddress">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    totalPoints?: SortOrder
    badgeLevel?: SortOrder
    itemsSorted?: SortOrder
    challengesCompleted?: SortOrder
    currentStreak?: SortOrder
    lastSortEventDate?: SortOrderInput | SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    onboarded?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    walletAddress?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    totalPoints?: IntWithAggregatesFilter<"User"> | number
    badgeLevel?: IntWithAggregatesFilter<"User"> | number
    itemsSorted?: IntWithAggregatesFilter<"User"> | number
    challengesCompleted?: IntWithAggregatesFilter<"User"> | number
    currentStreak?: IntWithAggregatesFilter<"User"> | number
    lastSortEventDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLogin?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    onboarded?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: StringFilter<"Challenge"> | string
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    goal?: IntFilter<"Challenge"> | number
    rewardPoints?: IntFilter<"Challenge"> | number
    isActive?: BoolFilter<"Challenge"> | boolean
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    userChallenges?: UserChallengeListRelationFilter
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    goal?: SortOrder
    rewardPoints?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userChallenges?: UserChallengeOrderByRelationAggregateInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    goal?: IntFilter<"Challenge"> | number
    rewardPoints?: IntFilter<"Challenge"> | number
    isActive?: BoolFilter<"Challenge"> | boolean
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    userChallenges?: UserChallengeListRelationFilter
  }, "id">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    goal?: SortOrder
    rewardPoints?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Challenge"> | string
    title?: StringWithAggregatesFilter<"Challenge"> | string
    description?: StringWithAggregatesFilter<"Challenge"> | string
    goal?: IntWithAggregatesFilter<"Challenge"> | number
    rewardPoints?: IntWithAggregatesFilter<"Challenge"> | number
    isActive?: BoolWithAggregatesFilter<"Challenge"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
  }

  export type UserChallengeWhereInput = {
    AND?: UserChallengeWhereInput | UserChallengeWhereInput[]
    OR?: UserChallengeWhereInput[]
    NOT?: UserChallengeWhereInput | UserChallengeWhereInput[]
    id?: StringFilter<"UserChallenge"> | string
    userId?: StringFilter<"UserChallenge"> | string
    challengeId?: StringFilter<"UserChallenge"> | string
    progress?: IntFilter<"UserChallenge"> | number
    isCompleted?: BoolFilter<"UserChallenge"> | boolean
    createdAt?: DateTimeFilter<"UserChallenge"> | Date | string
    updatedAt?: DateTimeFilter<"UserChallenge"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }

  export type UserChallengeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progress?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    challenge?: ChallengeOrderByWithRelationInput
  }

  export type UserChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_challengeId?: UserChallengeUserIdChallengeIdCompoundUniqueInput
    AND?: UserChallengeWhereInput | UserChallengeWhereInput[]
    OR?: UserChallengeWhereInput[]
    NOT?: UserChallengeWhereInput | UserChallengeWhereInput[]
    userId?: StringFilter<"UserChallenge"> | string
    challengeId?: StringFilter<"UserChallenge"> | string
    progress?: IntFilter<"UserChallenge"> | number
    isCompleted?: BoolFilter<"UserChallenge"> | boolean
    createdAt?: DateTimeFilter<"UserChallenge"> | Date | string
    updatedAt?: DateTimeFilter<"UserChallenge"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }, "id" | "userId_challengeId">

  export type UserChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progress?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserChallengeCountOrderByAggregateInput
    _avg?: UserChallengeAvgOrderByAggregateInput
    _max?: UserChallengeMaxOrderByAggregateInput
    _min?: UserChallengeMinOrderByAggregateInput
    _sum?: UserChallengeSumOrderByAggregateInput
  }

  export type UserChallengeScalarWhereWithAggregatesInput = {
    AND?: UserChallengeScalarWhereWithAggregatesInput | UserChallengeScalarWhereWithAggregatesInput[]
    OR?: UserChallengeScalarWhereWithAggregatesInput[]
    NOT?: UserChallengeScalarWhereWithAggregatesInput | UserChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserChallenge"> | string
    userId?: StringWithAggregatesFilter<"UserChallenge"> | string
    challengeId?: StringWithAggregatesFilter<"UserChallenge"> | string
    progress?: IntWithAggregatesFilter<"UserChallenge"> | number
    isCompleted?: BoolWithAggregatesFilter<"UserChallenge"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserChallenge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserChallenge"> | Date | string
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: StringFilter<"Badge"> | string
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    requiredPoints?: IntFilter<"Badge"> | number
    nftTokenId?: StringNullableFilter<"Badge"> | string | null
    imageUrl?: StringFilter<"Badge"> | string
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    updatedAt?: DateTimeFilter<"Badge"> | Date | string
    userBadges?: UserBadgeListRelationFilter
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requiredPoints?: SortOrder
    nftTokenId?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userBadges?: UserBadgeOrderByRelationAggregateInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    requiredPoints?: IntFilter<"Badge"> | number
    nftTokenId?: StringNullableFilter<"Badge"> | string | null
    imageUrl?: StringFilter<"Badge"> | string
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    updatedAt?: DateTimeFilter<"Badge"> | Date | string
    userBadges?: UserBadgeListRelationFilter
  }, "id">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requiredPoints?: SortOrder
    nftTokenId?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Badge"> | string
    name?: StringWithAggregatesFilter<"Badge"> | string
    description?: StringWithAggregatesFilter<"Badge"> | string
    requiredPoints?: IntWithAggregatesFilter<"Badge"> | number
    nftTokenId?: StringNullableWithAggregatesFilter<"Badge"> | string | null
    imageUrl?: StringWithAggregatesFilter<"Badge"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Badge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Badge"> | Date | string
  }

  export type UserBadgeWhereInput = {
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    id?: StringFilter<"UserBadge"> | string
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: StringFilter<"UserBadge"> | string
    minted?: BoolFilter<"UserBadge"> | boolean
    createdAt?: DateTimeFilter<"UserBadge"> | Date | string
    updatedAt?: DateTimeFilter<"UserBadge"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    badge?: XOR<BadgeScalarRelationFilter, BadgeWhereInput>
  }

  export type UserBadgeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    minted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    badge?: BadgeOrderByWithRelationInput
  }

  export type UserBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_badgeId?: UserBadgeUserIdBadgeIdCompoundUniqueInput
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: StringFilter<"UserBadge"> | string
    minted?: BoolFilter<"UserBadge"> | boolean
    createdAt?: DateTimeFilter<"UserBadge"> | Date | string
    updatedAt?: DateTimeFilter<"UserBadge"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    badge?: XOR<BadgeScalarRelationFilter, BadgeWhereInput>
  }, "id" | "userId_badgeId">

  export type UserBadgeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    minted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserBadgeCountOrderByAggregateInput
    _max?: UserBadgeMaxOrderByAggregateInput
    _min?: UserBadgeMinOrderByAggregateInput
  }

  export type UserBadgeScalarWhereWithAggregatesInput = {
    AND?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    OR?: UserBadgeScalarWhereWithAggregatesInput[]
    NOT?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserBadge"> | string
    userId?: StringWithAggregatesFilter<"UserBadge"> | string
    badgeId?: StringWithAggregatesFilter<"UserBadge"> | string
    minted?: BoolWithAggregatesFilter<"UserBadge"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserBadge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserBadge"> | Date | string
  }

  export type SortEventWhereInput = {
    AND?: SortEventWhereInput | SortEventWhereInput[]
    OR?: SortEventWhereInput[]
    NOT?: SortEventWhereInput | SortEventWhereInput[]
    id?: StringFilter<"SortEvent"> | string
    userId?: StringFilter<"SortEvent"> | string
    itemType?: StringFilter<"SortEvent"> | string
    pointsEarned?: IntFilter<"SortEvent"> | number
    createdAt?: DateTimeFilter<"SortEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SortEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    pointsEarned?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SortEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SortEventWhereInput | SortEventWhereInput[]
    OR?: SortEventWhereInput[]
    NOT?: SortEventWhereInput | SortEventWhereInput[]
    userId?: StringFilter<"SortEvent"> | string
    itemType?: StringFilter<"SortEvent"> | string
    pointsEarned?: IntFilter<"SortEvent"> | number
    createdAt?: DateTimeFilter<"SortEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SortEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    pointsEarned?: SortOrder
    createdAt?: SortOrder
    _count?: SortEventCountOrderByAggregateInput
    _avg?: SortEventAvgOrderByAggregateInput
    _max?: SortEventMaxOrderByAggregateInput
    _min?: SortEventMinOrderByAggregateInput
    _sum?: SortEventSumOrderByAggregateInput
  }

  export type SortEventScalarWhereWithAggregatesInput = {
    AND?: SortEventScalarWhereWithAggregatesInput | SortEventScalarWhereWithAggregatesInput[]
    OR?: SortEventScalarWhereWithAggregatesInput[]
    NOT?: SortEventScalarWhereWithAggregatesInput | SortEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SortEvent"> | string
    userId?: StringWithAggregatesFilter<"SortEvent"> | string
    itemType?: StringWithAggregatesFilter<"SortEvent"> | string
    pointsEarned?: IntWithAggregatesFilter<"SortEvent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SortEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    walletAddress: string
    name?: string | null
    email?: string | null
    profileImage?: string | null
    totalPoints?: number
    badgeLevel?: number
    itemsSorted?: number
    challengesCompleted?: number
    currentStreak?: number
    lastSortEventDate?: Date | string | null
    lastLogin?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarded?: boolean
    challenges?: UserChallengeCreateNestedManyWithoutUserInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
    sortEvents?: SortEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    walletAddress: string
    name?: string | null
    email?: string | null
    profileImage?: string | null
    totalPoints?: number
    badgeLevel?: number
    itemsSorted?: number
    challengesCompleted?: number
    currentStreak?: number
    lastSortEventDate?: Date | string | null
    lastLogin?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarded?: boolean
    challenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    sortEvents?: SortEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    badgeLevel?: IntFieldUpdateOperationsInput | number
    itemsSorted?: IntFieldUpdateOperationsInput | number
    challengesCompleted?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastSortEventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    challenges?: UserChallengeUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
    sortEvents?: SortEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    badgeLevel?: IntFieldUpdateOperationsInput | number
    itemsSorted?: IntFieldUpdateOperationsInput | number
    challengesCompleted?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastSortEventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    challenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    sortEvents?: SortEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    walletAddress: string
    name?: string | null
    email?: string | null
    profileImage?: string | null
    totalPoints?: number
    badgeLevel?: number
    itemsSorted?: number
    challengesCompleted?: number
    currentStreak?: number
    lastSortEventDate?: Date | string | null
    lastLogin?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarded?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    badgeLevel?: IntFieldUpdateOperationsInput | number
    itemsSorted?: IntFieldUpdateOperationsInput | number
    challengesCompleted?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastSortEventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    badgeLevel?: IntFieldUpdateOperationsInput | number
    itemsSorted?: IntFieldUpdateOperationsInput | number
    challengesCompleted?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastSortEventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeCreateInput = {
    id?: string
    title: string
    description: string
    goal: number
    rewardPoints: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userChallenges?: UserChallengeCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    goal: number
    rewardPoints: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    goal?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userChallenges?: UserChallengeUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    goal?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateManyInput = {
    id?: string
    title: string
    description: string
    goal: number
    rewardPoints: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    goal?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    goal?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeCreateInput = {
    id?: string
    progress?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChallengesInput
    challenge: ChallengeCreateNestedOneWithoutUserChallengesInput
  }

  export type UserChallengeUncheckedCreateInput = {
    id?: string
    userId: string
    challengeId: string
    progress?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChallengesNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutUserChallengesNestedInput
  }

  export type UserChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeCreateManyInput = {
    id?: string
    userId: string
    challengeId: string
    progress?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeCreateInput = {
    id?: string
    name: string
    description: string
    requiredPoints: number
    nftTokenId?: string | null
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userBadges?: UserBadgeCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    requiredPoints: number
    nftTokenId?: string | null
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requiredPoints?: IntFieldUpdateOperationsInput | number
    nftTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBadges?: UserBadgeUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requiredPoints?: IntFieldUpdateOperationsInput | number
    nftTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBadges?: UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeCreateManyInput = {
    id?: string
    name: string
    description: string
    requiredPoints: number
    nftTokenId?: string | null
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requiredPoints?: IntFieldUpdateOperationsInput | number
    nftTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requiredPoints?: IntFieldUpdateOperationsInput | number
    nftTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateInput = {
    id?: string
    minted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBadgesInput
    badge: BadgeCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgeUncheckedCreateInput = {
    id?: string
    userId: string
    badgeId: string
    minted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBadgesNestedInput
    badge?: BadgeUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    minted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateManyInput = {
    id?: string
    userId: string
    badgeId: string
    minted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    minted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    minted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SortEventCreateInput = {
    id?: string
    itemType: string
    pointsEarned: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSortEventsInput
  }

  export type SortEventUncheckedCreateInput = {
    id?: string
    userId: string
    itemType: string
    pointsEarned: number
    createdAt?: Date | string
  }

  export type SortEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSortEventsNestedInput
  }

  export type SortEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SortEventCreateManyInput = {
    id?: string
    userId: string
    itemType: string
    pointsEarned: number
    createdAt?: Date | string
  }

  export type SortEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SortEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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

  export type UserChallengeListRelationFilter = {
    every?: UserChallengeWhereInput
    some?: UserChallengeWhereInput
    none?: UserChallengeWhereInput
  }

  export type UserBadgeListRelationFilter = {
    every?: UserBadgeWhereInput
    some?: UserBadgeWhereInput
    none?: UserBadgeWhereInput
  }

  export type SortEventListRelationFilter = {
    every?: SortEventWhereInput
    some?: SortEventWhereInput
    none?: SortEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SortEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    totalPoints?: SortOrder
    badgeLevel?: SortOrder
    itemsSorted?: SortOrder
    challengesCompleted?: SortOrder
    currentStreak?: SortOrder
    lastSortEventDate?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    onboarded?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    totalPoints?: SortOrder
    badgeLevel?: SortOrder
    itemsSorted?: SortOrder
    challengesCompleted?: SortOrder
    currentStreak?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    totalPoints?: SortOrder
    badgeLevel?: SortOrder
    itemsSorted?: SortOrder
    challengesCompleted?: SortOrder
    currentStreak?: SortOrder
    lastSortEventDate?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    onboarded?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    totalPoints?: SortOrder
    badgeLevel?: SortOrder
    itemsSorted?: SortOrder
    challengesCompleted?: SortOrder
    currentStreak?: SortOrder
    lastSortEventDate?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    onboarded?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    totalPoints?: SortOrder
    badgeLevel?: SortOrder
    itemsSorted?: SortOrder
    challengesCompleted?: SortOrder
    currentStreak?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    goal?: SortOrder
    rewardPoints?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    goal?: SortOrder
    rewardPoints?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    goal?: SortOrder
    rewardPoints?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    goal?: SortOrder
    rewardPoints?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    goal?: SortOrder
    rewardPoints?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChallengeScalarRelationFilter = {
    is?: ChallengeWhereInput
    isNot?: ChallengeWhereInput
  }

  export type UserChallengeUserIdChallengeIdCompoundUniqueInput = {
    userId: string
    challengeId: string
  }

  export type UserChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progress?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserChallengeAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type UserChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progress?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progress?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserChallengeSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requiredPoints?: SortOrder
    nftTokenId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    requiredPoints?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requiredPoints?: SortOrder
    nftTokenId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requiredPoints?: SortOrder
    nftTokenId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    requiredPoints?: SortOrder
  }

  export type BadgeScalarRelationFilter = {
    is?: BadgeWhereInput
    isNot?: BadgeWhereInput
  }

  export type UserBadgeUserIdBadgeIdCompoundUniqueInput = {
    userId: string
    badgeId: string
  }

  export type UserBadgeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    minted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    minted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBadgeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    minted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SortEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    pointsEarned?: SortOrder
    createdAt?: SortOrder
  }

  export type SortEventAvgOrderByAggregateInput = {
    pointsEarned?: SortOrder
  }

  export type SortEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    pointsEarned?: SortOrder
    createdAt?: SortOrder
  }

  export type SortEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    pointsEarned?: SortOrder
    createdAt?: SortOrder
  }

  export type SortEventSumOrderByAggregateInput = {
    pointsEarned?: SortOrder
  }

  export type UserChallengeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type UserBadgeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type SortEventCreateNestedManyWithoutUserInput = {
    create?: XOR<SortEventCreateWithoutUserInput, SortEventUncheckedCreateWithoutUserInput> | SortEventCreateWithoutUserInput[] | SortEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SortEventCreateOrConnectWithoutUserInput | SortEventCreateOrConnectWithoutUserInput[]
    createMany?: SortEventCreateManyUserInputEnvelope
    connect?: SortEventWhereUniqueInput | SortEventWhereUniqueInput[]
  }

  export type UserChallengeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type SortEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SortEventCreateWithoutUserInput, SortEventUncheckedCreateWithoutUserInput> | SortEventCreateWithoutUserInput[] | SortEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SortEventCreateOrConnectWithoutUserInput | SortEventCreateOrConnectWithoutUserInput[]
    createMany?: SortEventCreateManyUserInputEnvelope
    connect?: SortEventWhereUniqueInput | SortEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserChallengeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutUserInput | UserChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutUserInput | UserChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutUserInput | UserChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserBadgeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutUserInput | UserBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutUserInput | UserBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutUserInput | UserBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type SortEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<SortEventCreateWithoutUserInput, SortEventUncheckedCreateWithoutUserInput> | SortEventCreateWithoutUserInput[] | SortEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SortEventCreateOrConnectWithoutUserInput | SortEventCreateOrConnectWithoutUserInput[]
    upsert?: SortEventUpsertWithWhereUniqueWithoutUserInput | SortEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SortEventCreateManyUserInputEnvelope
    set?: SortEventWhereUniqueInput | SortEventWhereUniqueInput[]
    disconnect?: SortEventWhereUniqueInput | SortEventWhereUniqueInput[]
    delete?: SortEventWhereUniqueInput | SortEventWhereUniqueInput[]
    connect?: SortEventWhereUniqueInput | SortEventWhereUniqueInput[]
    update?: SortEventUpdateWithWhereUniqueWithoutUserInput | SortEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SortEventUpdateManyWithWhereWithoutUserInput | SortEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SortEventScalarWhereInput | SortEventScalarWhereInput[]
  }

  export type UserChallengeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutUserInput | UserChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutUserInput | UserChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutUserInput | UserChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutUserInput | UserBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutUserInput | UserBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutUserInput | UserBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type SortEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SortEventCreateWithoutUserInput, SortEventUncheckedCreateWithoutUserInput> | SortEventCreateWithoutUserInput[] | SortEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SortEventCreateOrConnectWithoutUserInput | SortEventCreateOrConnectWithoutUserInput[]
    upsert?: SortEventUpsertWithWhereUniqueWithoutUserInput | SortEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SortEventCreateManyUserInputEnvelope
    set?: SortEventWhereUniqueInput | SortEventWhereUniqueInput[]
    disconnect?: SortEventWhereUniqueInput | SortEventWhereUniqueInput[]
    delete?: SortEventWhereUniqueInput | SortEventWhereUniqueInput[]
    connect?: SortEventWhereUniqueInput | SortEventWhereUniqueInput[]
    update?: SortEventUpdateWithWhereUniqueWithoutUserInput | SortEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SortEventUpdateManyWithWhereWithoutUserInput | SortEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SortEventScalarWhereInput | SortEventScalarWhereInput[]
  }

  export type UserChallengeCreateNestedManyWithoutChallengeInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type UserChallengeUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type UserChallengeUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutChallengeInput | UserChallengeUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutChallengeInput | UserChallengeUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutChallengeInput | UserChallengeUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserChallengeUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutChallengeInput | UserChallengeUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutChallengeInput | UserChallengeUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutChallengeInput | UserChallengeUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChallengesInput = {
    create?: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengesInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutUserChallengesInput = {
    create?: XOR<ChallengeCreateWithoutUserChallengesInput, ChallengeUncheckedCreateWithoutUserChallengesInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserChallengesInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChallengesNestedInput = {
    create?: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengesInput
    upsert?: UserUpsertWithoutChallengesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChallengesInput, UserUpdateWithoutChallengesInput>, UserUncheckedUpdateWithoutChallengesInput>
  }

  export type ChallengeUpdateOneRequiredWithoutUserChallengesNestedInput = {
    create?: XOR<ChallengeCreateWithoutUserChallengesInput, ChallengeUncheckedCreateWithoutUserChallengesInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserChallengesInput
    upsert?: ChallengeUpsertWithoutUserChallengesInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutUserChallengesInput, ChallengeUpdateWithoutUserChallengesInput>, ChallengeUncheckedUpdateWithoutUserChallengesInput>
  }

  export type UserBadgeCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserBadgeUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBadgesInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    connect?: UserWhereUniqueInput
  }

  export type BadgeCreateNestedOneWithoutUserBadgesInput = {
    create?: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUserBadgesInput
    connect?: BadgeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBadgesNestedInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    upsert?: UserUpsertWithoutBadgesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBadgesInput, UserUpdateWithoutBadgesInput>, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type BadgeUpdateOneRequiredWithoutUserBadgesNestedInput = {
    create?: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUserBadgesInput
    upsert?: BadgeUpsertWithoutUserBadgesInput
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutUserBadgesInput, BadgeUpdateWithoutUserBadgesInput>, BadgeUncheckedUpdateWithoutUserBadgesInput>
  }

  export type UserCreateNestedOneWithoutSortEventsInput = {
    create?: XOR<UserCreateWithoutSortEventsInput, UserUncheckedCreateWithoutSortEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSortEventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSortEventsNestedInput = {
    create?: XOR<UserCreateWithoutSortEventsInput, UserUncheckedCreateWithoutSortEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSortEventsInput
    upsert?: UserUpsertWithoutSortEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSortEventsInput, UserUpdateWithoutSortEventsInput>, UserUncheckedUpdateWithoutSortEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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

  export type UserChallengeCreateWithoutUserInput = {
    id?: string
    progress?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutUserChallengesInput
  }

  export type UserChallengeUncheckedCreateWithoutUserInput = {
    id?: string
    challengeId: string
    progress?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserChallengeCreateOrConnectWithoutUserInput = {
    where: UserChallengeWhereUniqueInput
    create: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput>
  }

  export type UserChallengeCreateManyUserInputEnvelope = {
    data: UserChallengeCreateManyUserInput | UserChallengeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeCreateWithoutUserInput = {
    id?: string
    minted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    badge: BadgeCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgeUncheckedCreateWithoutUserInput = {
    id?: string
    badgeId: string
    minted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBadgeCreateOrConnectWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeCreateManyUserInputEnvelope = {
    data: UserBadgeCreateManyUserInput | UserBadgeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SortEventCreateWithoutUserInput = {
    id?: string
    itemType: string
    pointsEarned: number
    createdAt?: Date | string
  }

  export type SortEventUncheckedCreateWithoutUserInput = {
    id?: string
    itemType: string
    pointsEarned: number
    createdAt?: Date | string
  }

  export type SortEventCreateOrConnectWithoutUserInput = {
    where: SortEventWhereUniqueInput
    create: XOR<SortEventCreateWithoutUserInput, SortEventUncheckedCreateWithoutUserInput>
  }

  export type SortEventCreateManyUserInputEnvelope = {
    data: SortEventCreateManyUserInput | SortEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserChallengeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserChallengeWhereUniqueInput
    update: XOR<UserChallengeUpdateWithoutUserInput, UserChallengeUncheckedUpdateWithoutUserInput>
    create: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput>
  }

  export type UserChallengeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserChallengeWhereUniqueInput
    data: XOR<UserChallengeUpdateWithoutUserInput, UserChallengeUncheckedUpdateWithoutUserInput>
  }

  export type UserChallengeUpdateManyWithWhereWithoutUserInput = {
    where: UserChallengeScalarWhereInput
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserChallengeScalarWhereInput = {
    AND?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
    OR?: UserChallengeScalarWhereInput[]
    NOT?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
    id?: StringFilter<"UserChallenge"> | string
    userId?: StringFilter<"UserChallenge"> | string
    challengeId?: StringFilter<"UserChallenge"> | string
    progress?: IntFilter<"UserChallenge"> | number
    isCompleted?: BoolFilter<"UserChallenge"> | boolean
    createdAt?: DateTimeFilter<"UserChallenge"> | Date | string
    updatedAt?: DateTimeFilter<"UserChallenge"> | Date | string
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutUserInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBadgeScalarWhereInput = {
    AND?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    OR?: UserBadgeScalarWhereInput[]
    NOT?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    id?: StringFilter<"UserBadge"> | string
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: StringFilter<"UserBadge"> | string
    minted?: BoolFilter<"UserBadge"> | boolean
    createdAt?: DateTimeFilter<"UserBadge"> | Date | string
    updatedAt?: DateTimeFilter<"UserBadge"> | Date | string
  }

  export type SortEventUpsertWithWhereUniqueWithoutUserInput = {
    where: SortEventWhereUniqueInput
    update: XOR<SortEventUpdateWithoutUserInput, SortEventUncheckedUpdateWithoutUserInput>
    create: XOR<SortEventCreateWithoutUserInput, SortEventUncheckedCreateWithoutUserInput>
  }

  export type SortEventUpdateWithWhereUniqueWithoutUserInput = {
    where: SortEventWhereUniqueInput
    data: XOR<SortEventUpdateWithoutUserInput, SortEventUncheckedUpdateWithoutUserInput>
  }

  export type SortEventUpdateManyWithWhereWithoutUserInput = {
    where: SortEventScalarWhereInput
    data: XOR<SortEventUpdateManyMutationInput, SortEventUncheckedUpdateManyWithoutUserInput>
  }

  export type SortEventScalarWhereInput = {
    AND?: SortEventScalarWhereInput | SortEventScalarWhereInput[]
    OR?: SortEventScalarWhereInput[]
    NOT?: SortEventScalarWhereInput | SortEventScalarWhereInput[]
    id?: StringFilter<"SortEvent"> | string
    userId?: StringFilter<"SortEvent"> | string
    itemType?: StringFilter<"SortEvent"> | string
    pointsEarned?: IntFilter<"SortEvent"> | number
    createdAt?: DateTimeFilter<"SortEvent"> | Date | string
  }

  export type UserChallengeCreateWithoutChallengeInput = {
    id?: string
    progress?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChallengesInput
  }

  export type UserChallengeUncheckedCreateWithoutChallengeInput = {
    id?: string
    userId: string
    progress?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserChallengeCreateOrConnectWithoutChallengeInput = {
    where: UserChallengeWhereUniqueInput
    create: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput>
  }

  export type UserChallengeCreateManyChallengeInputEnvelope = {
    data: UserChallengeCreateManyChallengeInput | UserChallengeCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type UserChallengeUpsertWithWhereUniqueWithoutChallengeInput = {
    where: UserChallengeWhereUniqueInput
    update: XOR<UserChallengeUpdateWithoutChallengeInput, UserChallengeUncheckedUpdateWithoutChallengeInput>
    create: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput>
  }

  export type UserChallengeUpdateWithWhereUniqueWithoutChallengeInput = {
    where: UserChallengeWhereUniqueInput
    data: XOR<UserChallengeUpdateWithoutChallengeInput, UserChallengeUncheckedUpdateWithoutChallengeInput>
  }

  export type UserChallengeUpdateManyWithWhereWithoutChallengeInput = {
    where: UserChallengeScalarWhereInput
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyWithoutChallengeInput>
  }

  export type UserCreateWithoutChallengesInput = {
    id?: string
    walletAddress: string
    name?: string | null
    email?: string | null
    profileImage?: string | null
    totalPoints?: number
    badgeLevel?: number
    itemsSorted?: number
    challengesCompleted?: number
    currentStreak?: number
    lastSortEventDate?: Date | string | null
    lastLogin?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarded?: boolean
    badges?: UserBadgeCreateNestedManyWithoutUserInput
    sortEvents?: SortEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChallengesInput = {
    id?: string
    walletAddress: string
    name?: string | null
    email?: string | null
    profileImage?: string | null
    totalPoints?: number
    badgeLevel?: number
    itemsSorted?: number
    challengesCompleted?: number
    currentStreak?: number
    lastSortEventDate?: Date | string | null
    lastLogin?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarded?: boolean
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    sortEvents?: SortEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChallengesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
  }

  export type ChallengeCreateWithoutUserChallengesInput = {
    id?: string
    title: string
    description: string
    goal: number
    rewardPoints: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeUncheckedCreateWithoutUserChallengesInput = {
    id?: string
    title: string
    description: string
    goal: number
    rewardPoints: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeCreateOrConnectWithoutUserChallengesInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutUserChallengesInput, ChallengeUncheckedCreateWithoutUserChallengesInput>
  }

  export type UserUpsertWithoutChallengesInput = {
    update: XOR<UserUpdateWithoutChallengesInput, UserUncheckedUpdateWithoutChallengesInput>
    create: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChallengesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChallengesInput, UserUncheckedUpdateWithoutChallengesInput>
  }

  export type UserUpdateWithoutChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    badgeLevel?: IntFieldUpdateOperationsInput | number
    itemsSorted?: IntFieldUpdateOperationsInput | number
    challengesCompleted?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastSortEventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
    sortEvents?: SortEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    badgeLevel?: IntFieldUpdateOperationsInput | number
    itemsSorted?: IntFieldUpdateOperationsInput | number
    challengesCompleted?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastSortEventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    sortEvents?: SortEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengeUpsertWithoutUserChallengesInput = {
    update: XOR<ChallengeUpdateWithoutUserChallengesInput, ChallengeUncheckedUpdateWithoutUserChallengesInput>
    create: XOR<ChallengeCreateWithoutUserChallengesInput, ChallengeUncheckedCreateWithoutUserChallengesInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutUserChallengesInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutUserChallengesInput, ChallengeUncheckedUpdateWithoutUserChallengesInput>
  }

  export type ChallengeUpdateWithoutUserChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    goal?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUncheckedUpdateWithoutUserChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    goal?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateWithoutBadgeInput = {
    id?: string
    minted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBadgesInput
  }

  export type UserBadgeUncheckedCreateWithoutBadgeInput = {
    id?: string
    userId: string
    minted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBadgeCreateOrConnectWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeCreateManyBadgeInputEnvelope = {
    data: UserBadgeCreateManyBadgeInput | UserBadgeCreateManyBadgeInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutBadgeInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutBadgeInput>
  }

  export type UserCreateWithoutBadgesInput = {
    id?: string
    walletAddress: string
    name?: string | null
    email?: string | null
    profileImage?: string | null
    totalPoints?: number
    badgeLevel?: number
    itemsSorted?: number
    challengesCompleted?: number
    currentStreak?: number
    lastSortEventDate?: Date | string | null
    lastLogin?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarded?: boolean
    challenges?: UserChallengeCreateNestedManyWithoutUserInput
    sortEvents?: SortEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBadgesInput = {
    id?: string
    walletAddress: string
    name?: string | null
    email?: string | null
    profileImage?: string | null
    totalPoints?: number
    badgeLevel?: number
    itemsSorted?: number
    challengesCompleted?: number
    currentStreak?: number
    lastSortEventDate?: Date | string | null
    lastLogin?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarded?: boolean
    challenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    sortEvents?: SortEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBadgesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
  }

  export type BadgeCreateWithoutUserBadgesInput = {
    id?: string
    name: string
    description: string
    requiredPoints: number
    nftTokenId?: string | null
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgeUncheckedCreateWithoutUserBadgesInput = {
    id?: string
    name: string
    description: string
    requiredPoints: number
    nftTokenId?: string | null
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgeCreateOrConnectWithoutUserBadgesInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
  }

  export type UserUpsertWithoutBadgesInput = {
    update: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBadgesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type UserUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    badgeLevel?: IntFieldUpdateOperationsInput | number
    itemsSorted?: IntFieldUpdateOperationsInput | number
    challengesCompleted?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastSortEventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    challenges?: UserChallengeUpdateManyWithoutUserNestedInput
    sortEvents?: SortEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    badgeLevel?: IntFieldUpdateOperationsInput | number
    itemsSorted?: IntFieldUpdateOperationsInput | number
    challengesCompleted?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastSortEventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    challenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    sortEvents?: SortEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BadgeUpsertWithoutUserBadgesInput = {
    update: XOR<BadgeUpdateWithoutUserBadgesInput, BadgeUncheckedUpdateWithoutUserBadgesInput>
    create: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
    where?: BadgeWhereInput
  }

  export type BadgeUpdateToOneWithWhereWithoutUserBadgesInput = {
    where?: BadgeWhereInput
    data: XOR<BadgeUpdateWithoutUserBadgesInput, BadgeUncheckedUpdateWithoutUserBadgesInput>
  }

  export type BadgeUpdateWithoutUserBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requiredPoints?: IntFieldUpdateOperationsInput | number
    nftTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateWithoutUserBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requiredPoints?: IntFieldUpdateOperationsInput | number
    nftTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSortEventsInput = {
    id?: string
    walletAddress: string
    name?: string | null
    email?: string | null
    profileImage?: string | null
    totalPoints?: number
    badgeLevel?: number
    itemsSorted?: number
    challengesCompleted?: number
    currentStreak?: number
    lastSortEventDate?: Date | string | null
    lastLogin?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarded?: boolean
    challenges?: UserChallengeCreateNestedManyWithoutUserInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSortEventsInput = {
    id?: string
    walletAddress: string
    name?: string | null
    email?: string | null
    profileImage?: string | null
    totalPoints?: number
    badgeLevel?: number
    itemsSorted?: number
    challengesCompleted?: number
    currentStreak?: number
    lastSortEventDate?: Date | string | null
    lastLogin?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarded?: boolean
    challenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSortEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSortEventsInput, UserUncheckedCreateWithoutSortEventsInput>
  }

  export type UserUpsertWithoutSortEventsInput = {
    update: XOR<UserUpdateWithoutSortEventsInput, UserUncheckedUpdateWithoutSortEventsInput>
    create: XOR<UserCreateWithoutSortEventsInput, UserUncheckedCreateWithoutSortEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSortEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSortEventsInput, UserUncheckedUpdateWithoutSortEventsInput>
  }

  export type UserUpdateWithoutSortEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    badgeLevel?: IntFieldUpdateOperationsInput | number
    itemsSorted?: IntFieldUpdateOperationsInput | number
    challengesCompleted?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastSortEventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    challenges?: UserChallengeUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSortEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    badgeLevel?: IntFieldUpdateOperationsInput | number
    itemsSorted?: IntFieldUpdateOperationsInput | number
    challengesCompleted?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    lastSortEventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    challenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserChallengeCreateManyUserInput = {
    id?: string
    challengeId: string
    progress?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBadgeCreateManyUserInput = {
    id?: string
    badgeId: string
    minted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SortEventCreateManyUserInput = {
    id?: string
    itemType: string
    pointsEarned: number
    createdAt?: Date | string
  }

  export type UserChallengeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutUserChallengesNestedInput
  }

  export type UserChallengeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    minted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badge?: BadgeUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    minted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    minted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SortEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SortEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SortEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeCreateManyChallengeInput = {
    id?: string
    userId: string
    progress?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserChallengeUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChallengesNestedInput
  }

  export type UserChallengeUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateManyBadgeInput = {
    id?: string
    userId: string
    minted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBadgeUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    minted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    minted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    minted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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