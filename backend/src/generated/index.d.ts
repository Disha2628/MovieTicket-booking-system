
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
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model Actor
 * 
 */
export type Actor = $Result.DefaultSelection<Prisma.$ActorPayload>
/**
 * Model Movie_Actor
 * 
 */
export type Movie_Actor = $Result.DefaultSelection<Prisma.$Movie_ActorPayload>
/**
 * Model Screen
 * 
 */
export type Screen = $Result.DefaultSelection<Prisma.$ScreenPayload>
/**
 * Model Show
 * 
 */
export type Show = $Result.DefaultSelection<Prisma.$ShowPayload>
/**
 * Model Seat
 * 
 */
export type Seat = $Result.DefaultSelection<Prisma.$SeatPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model booking
 * 
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>
/**
 * Model booking_seats
 * 
 */
export type booking_seats = $Result.DefaultSelection<Prisma.$booking_seatsPayload>
/**
 * Model customer
 * 
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>
/**
 * Model theatre
 * 
 */
export type theatre = $Result.DefaultSelection<Prisma.$theatrePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const seats_status: {
  available: 'available',
  unavailable: 'unavailable'
};

export type seats_status = (typeof seats_status)[keyof typeof seats_status]


export const shows_Show_dimension: {
  D2: 'D2',
  D3: 'D3',
  D4: 'D4'
};

export type shows_Show_dimension = (typeof shows_Show_dimension)[keyof typeof shows_Show_dimension]

}

export type seats_status = $Enums.seats_status

export const seats_status: typeof $Enums.seats_status

export type shows_Show_dimension = $Enums.shows_Show_dimension

export const shows_Show_dimension: typeof $Enums.shows_Show_dimension

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Movies
 * const movies = await prisma.movie.findMany()
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
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
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
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actor`: Exposes CRUD operations for the **Actor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actors
    * const actors = await prisma.actor.findMany()
    * ```
    */
  get actor(): Prisma.ActorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie_Actor`: Exposes CRUD operations for the **Movie_Actor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movie_Actors
    * const movie_Actors = await prisma.movie_Actor.findMany()
    * ```
    */
  get movie_Actor(): Prisma.Movie_ActorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.screen`: Exposes CRUD operations for the **Screen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Screens
    * const screens = await prisma.screen.findMany()
    * ```
    */
  get screen(): Prisma.ScreenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.show`: Exposes CRUD operations for the **Show** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shows
    * const shows = await prisma.show.findMany()
    * ```
    */
  get show(): Prisma.ShowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seat`: Exposes CRUD operations for the **Seat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seats
    * const seats = await prisma.seat.findMany()
    * ```
    */
  get seat(): Prisma.SeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.bookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking_seats`: Exposes CRUD operations for the **booking_seats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Booking_seats
    * const booking_seats = await prisma.booking_seats.findMany()
    * ```
    */
  get booking_seats(): Prisma.booking_seatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.customerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theatre`: Exposes CRUD operations for the **theatre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Theatres
    * const theatres = await prisma.theatre.findMany()
    * ```
    */
  get theatre(): Prisma.theatreDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
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
    Movie: 'Movie',
    Actor: 'Actor',
    Movie_Actor: 'Movie_Actor',
    Screen: 'Screen',
    Show: 'Show',
    Seat: 'Seat',
    Review: 'Review',
    booking: 'booking',
    booking_seats: 'booking_seats',
    customer: 'customer',
    theatre: 'theatre'
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
      modelProps: "movie" | "actor" | "movie_Actor" | "screen" | "show" | "seat" | "review" | "booking" | "booking_seats" | "customer" | "theatre"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      Actor: {
        payload: Prisma.$ActorPayload<ExtArgs>
        fields: Prisma.ActorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          findFirst: {
            args: Prisma.ActorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          findMany: {
            args: Prisma.ActorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>[]
          }
          create: {
            args: Prisma.ActorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          createMany: {
            args: Prisma.ActorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          update: {
            args: Prisma.ActorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          deleteMany: {
            args: Prisma.ActorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          aggregate: {
            args: Prisma.ActorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActor>
          }
          groupBy: {
            args: Prisma.ActorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActorCountArgs<ExtArgs>
            result: $Utils.Optional<ActorCountAggregateOutputType> | number
          }
        }
      }
      Movie_Actor: {
        payload: Prisma.$Movie_ActorPayload<ExtArgs>
        fields: Prisma.Movie_ActorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Movie_ActorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_ActorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Movie_ActorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_ActorPayload>
          }
          findFirst: {
            args: Prisma.Movie_ActorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_ActorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Movie_ActorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_ActorPayload>
          }
          findMany: {
            args: Prisma.Movie_ActorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_ActorPayload>[]
          }
          create: {
            args: Prisma.Movie_ActorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_ActorPayload>
          }
          createMany: {
            args: Prisma.Movie_ActorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Movie_ActorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_ActorPayload>
          }
          update: {
            args: Prisma.Movie_ActorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_ActorPayload>
          }
          deleteMany: {
            args: Prisma.Movie_ActorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Movie_ActorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Movie_ActorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_ActorPayload>
          }
          aggregate: {
            args: Prisma.Movie_ActorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie_Actor>
          }
          groupBy: {
            args: Prisma.Movie_ActorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Movie_ActorGroupByOutputType>[]
          }
          count: {
            args: Prisma.Movie_ActorCountArgs<ExtArgs>
            result: $Utils.Optional<Movie_ActorCountAggregateOutputType> | number
          }
        }
      }
      Screen: {
        payload: Prisma.$ScreenPayload<ExtArgs>
        fields: Prisma.ScreenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScreenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScreenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>
          }
          findFirst: {
            args: Prisma.ScreenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScreenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>
          }
          findMany: {
            args: Prisma.ScreenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>[]
          }
          create: {
            args: Prisma.ScreenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>
          }
          createMany: {
            args: Prisma.ScreenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScreenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>
          }
          update: {
            args: Prisma.ScreenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>
          }
          deleteMany: {
            args: Prisma.ScreenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScreenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScreenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>
          }
          aggregate: {
            args: Prisma.ScreenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScreen>
          }
          groupBy: {
            args: Prisma.ScreenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScreenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScreenCountArgs<ExtArgs>
            result: $Utils.Optional<ScreenCountAggregateOutputType> | number
          }
        }
      }
      Show: {
        payload: Prisma.$ShowPayload<ExtArgs>
        fields: Prisma.ShowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          findFirst: {
            args: Prisma.ShowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          findMany: {
            args: Prisma.ShowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>[]
          }
          create: {
            args: Prisma.ShowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          createMany: {
            args: Prisma.ShowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          update: {
            args: Prisma.ShowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          deleteMany: {
            args: Prisma.ShowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowPayload>
          }
          aggregate: {
            args: Prisma.ShowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShow>
          }
          groupBy: {
            args: Prisma.ShowGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowCountArgs<ExtArgs>
            result: $Utils.Optional<ShowCountAggregateOutputType> | number
          }
        }
      }
      Seat: {
        payload: Prisma.$SeatPayload<ExtArgs>
        fields: Prisma.SeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findFirst: {
            args: Prisma.SeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findMany: {
            args: Prisma.SeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          create: {
            args: Prisma.SeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          createMany: {
            args: Prisma.SeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          update: {
            args: Prisma.SeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          deleteMany: {
            args: Prisma.SeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          aggregate: {
            args: Prisma.SeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeat>
          }
          groupBy: {
            args: Prisma.SeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatCountArgs<ExtArgs>
            result: $Utils.Optional<SeatCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>
        fields: Prisma.bookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      booking_seats: {
        payload: Prisma.$booking_seatsPayload<ExtArgs>
        fields: Prisma.booking_seatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.booking_seatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_seatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.booking_seatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_seatsPayload>
          }
          findFirst: {
            args: Prisma.booking_seatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_seatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.booking_seatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_seatsPayload>
          }
          findMany: {
            args: Prisma.booking_seatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_seatsPayload>[]
          }
          create: {
            args: Prisma.booking_seatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_seatsPayload>
          }
          createMany: {
            args: Prisma.booking_seatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.booking_seatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_seatsPayload>
          }
          update: {
            args: Prisma.booking_seatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_seatsPayload>
          }
          deleteMany: {
            args: Prisma.booking_seatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.booking_seatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.booking_seatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_seatsPayload>
          }
          aggregate: {
            args: Prisma.Booking_seatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking_seats>
          }
          groupBy: {
            args: Prisma.booking_seatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Booking_seatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.booking_seatsCountArgs<ExtArgs>
            result: $Utils.Optional<Booking_seatsCountAggregateOutputType> | number
          }
        }
      }
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>
        fields: Prisma.customerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.customerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      theatre: {
        payload: Prisma.$theatrePayload<ExtArgs>
        fields: Prisma.theatreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.theatreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theatrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.theatreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theatrePayload>
          }
          findFirst: {
            args: Prisma.theatreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theatrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.theatreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theatrePayload>
          }
          findMany: {
            args: Prisma.theatreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theatrePayload>[]
          }
          create: {
            args: Prisma.theatreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theatrePayload>
          }
          createMany: {
            args: Prisma.theatreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.theatreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theatrePayload>
          }
          update: {
            args: Prisma.theatreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theatrePayload>
          }
          deleteMany: {
            args: Prisma.theatreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.theatreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.theatreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theatrePayload>
          }
          aggregate: {
            args: Prisma.TheatreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheatre>
          }
          groupBy: {
            args: Prisma.theatreGroupByArgs<ExtArgs>
            result: $Utils.Optional<TheatreGroupByOutputType>[]
          }
          count: {
            args: Prisma.theatreCountArgs<ExtArgs>
            result: $Utils.Optional<TheatreCountAggregateOutputType> | number
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
    movie?: MovieOmit
    actor?: ActorOmit
    movie_Actor?: Movie_ActorOmit
    screen?: ScreenOmit
    show?: ShowOmit
    seat?: SeatOmit
    review?: ReviewOmit
    booking?: bookingOmit
    booking_seats?: booking_seatsOmit
    customer?: customerOmit
    theatre?: theatreOmit
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
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    movie_actors: number
    reviews: number
    shows: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie_actors?: boolean | MovieCountOutputTypeCountMovie_actorsArgs
    reviews?: boolean | MovieCountOutputTypeCountReviewsArgs
    shows?: boolean | MovieCountOutputTypeCountShowsArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountMovie_actorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Movie_ActorWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowWhereInput
  }


  /**
   * Count Type ActorCountOutputType
   */

  export type ActorCountOutputType = {
    movie_actors: number
  }

  export type ActorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie_actors?: boolean | ActorCountOutputTypeCountMovie_actorsArgs
  }

  // Custom InputTypes
  /**
   * ActorCountOutputType without action
   */
  export type ActorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorCountOutputType
     */
    select?: ActorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActorCountOutputType without action
   */
  export type ActorCountOutputTypeCountMovie_actorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Movie_ActorWhereInput
  }


  /**
   * Count Type ScreenCountOutputType
   */

  export type ScreenCountOutputType = {
    shows: number
  }

  export type ScreenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shows?: boolean | ScreenCountOutputTypeCountShowsArgs
  }

  // Custom InputTypes
  /**
   * ScreenCountOutputType without action
   */
  export type ScreenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenCountOutputType
     */
    select?: ScreenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScreenCountOutputType without action
   */
  export type ScreenCountOutputTypeCountShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowWhereInput
  }


  /**
   * Count Type ShowCountOutputType
   */

  export type ShowCountOutputType = {
    booking: number
    seats: number
  }

  export type ShowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | ShowCountOutputTypeCountBookingArgs
    seats?: boolean | ShowCountOutputTypeCountSeatsArgs
  }

  // Custom InputTypes
  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCountOutputType
     */
    select?: ShowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeCountSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
  }


  /**
   * Count Type SeatCountOutputType
   */

  export type SeatCountOutputType = {
    booking_seats: number
  }

  export type SeatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_seats?: boolean | SeatCountOutputTypeCountBooking_seatsArgs
  }

  // Custom InputTypes
  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatCountOutputType
     */
    select?: SeatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeCountBooking_seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booking_seatsWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    booking_seats: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_seats?: boolean | BookingCountOutputTypeCountBooking_seatsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountBooking_seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booking_seatsWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    booking: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | CustomerCountOutputTypeCountBookingArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }


  /**
   * Count Type TheatreCountOutputType
   */

  export type TheatreCountOutputType = {
    screens: number
    shows: number
  }

  export type TheatreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screens?: boolean | TheatreCountOutputTypeCountScreensArgs
    shows?: boolean | TheatreCountOutputTypeCountShowsArgs
  }

  // Custom InputTypes
  /**
   * TheatreCountOutputType without action
   */
  export type TheatreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TheatreCountOutputType
     */
    select?: TheatreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TheatreCountOutputType without action
   */
  export type TheatreCountOutputTypeCountScreensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenWhereInput
  }

  /**
   * TheatreCountOutputType without action
   */
  export type TheatreCountOutputTypeCountShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    Movie_Id: number | null
    Duration: number | null
    Rating: number | null
  }

  export type MovieSumAggregateOutputType = {
    Movie_Id: number | null
    Duration: number | null
    Rating: number | null
  }

  export type MovieMinAggregateOutputType = {
    Movie_Id: number | null
    Title: string | null
    Genre: string | null
    Language: string | null
    Duration: number | null
    Trailer_URL: string | null
    Rating: number | null
    Description: string | null
    Release_date: Date | null
    Poster_url: string | null
  }

  export type MovieMaxAggregateOutputType = {
    Movie_Id: number | null
    Title: string | null
    Genre: string | null
    Language: string | null
    Duration: number | null
    Trailer_URL: string | null
    Rating: number | null
    Description: string | null
    Release_date: Date | null
    Poster_url: string | null
  }

  export type MovieCountAggregateOutputType = {
    Movie_Id: number
    Title: number
    Genre: number
    Language: number
    Duration: number
    Trailer_URL: number
    Rating: number
    Description: number
    Release_date: number
    Poster_url: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    Movie_Id?: true
    Duration?: true
    Rating?: true
  }

  export type MovieSumAggregateInputType = {
    Movie_Id?: true
    Duration?: true
    Rating?: true
  }

  export type MovieMinAggregateInputType = {
    Movie_Id?: true
    Title?: true
    Genre?: true
    Language?: true
    Duration?: true
    Trailer_URL?: true
    Rating?: true
    Description?: true
    Release_date?: true
    Poster_url?: true
  }

  export type MovieMaxAggregateInputType = {
    Movie_Id?: true
    Title?: true
    Genre?: true
    Language?: true
    Duration?: true
    Trailer_URL?: true
    Rating?: true
    Description?: true
    Release_date?: true
    Poster_url?: true
  }

  export type MovieCountAggregateInputType = {
    Movie_Id?: true
    Title?: true
    Genre?: true
    Language?: true
    Duration?: true
    Trailer_URL?: true
    Rating?: true
    Description?: true
    Release_date?: true
    Poster_url?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    Movie_Id: number
    Title: string
    Genre: string | null
    Language: string | null
    Duration: number | null
    Trailer_URL: string | null
    Rating: number | null
    Description: string | null
    Release_date: Date | null
    Poster_url: string | null
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Movie_Id?: boolean
    Title?: boolean
    Genre?: boolean
    Language?: boolean
    Duration?: boolean
    Trailer_URL?: boolean
    Rating?: boolean
    Description?: boolean
    Release_date?: boolean
    Poster_url?: boolean
    movie_actors?: boolean | Movie$movie_actorsArgs<ExtArgs>
    reviews?: boolean | Movie$reviewsArgs<ExtArgs>
    shows?: boolean | Movie$showsArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>



  export type MovieSelectScalar = {
    Movie_Id?: boolean
    Title?: boolean
    Genre?: boolean
    Language?: boolean
    Duration?: boolean
    Trailer_URL?: boolean
    Rating?: boolean
    Description?: boolean
    Release_date?: boolean
    Poster_url?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Movie_Id" | "Title" | "Genre" | "Language" | "Duration" | "Trailer_URL" | "Rating" | "Description" | "Release_date" | "Poster_url", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie_actors?: boolean | Movie$movie_actorsArgs<ExtArgs>
    reviews?: boolean | Movie$reviewsArgs<ExtArgs>
    shows?: boolean | Movie$showsArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      movie_actors: Prisma.$Movie_ActorPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      shows: Prisma.$ShowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Movie_Id: number
      Title: string
      Genre: string | null
      Language: string | null
      Duration: number | null
      Trailer_URL: string | null
      Rating: number | null
      Description: string | null
      Release_date: Date | null
      Poster_url: string | null
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `Movie_Id`
     * const movieWithMovie_IdOnly = await prisma.movie.findMany({ select: { Movie_Id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
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
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie_actors<T extends Movie$movie_actorsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$movie_actorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Movie_ActorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Movie$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shows<T extends Movie$showsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$showsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly Movie_Id: FieldRef<"Movie", 'Int'>
    readonly Title: FieldRef<"Movie", 'String'>
    readonly Genre: FieldRef<"Movie", 'String'>
    readonly Language: FieldRef<"Movie", 'String'>
    readonly Duration: FieldRef<"Movie", 'Int'>
    readonly Trailer_URL: FieldRef<"Movie", 'String'>
    readonly Rating: FieldRef<"Movie", 'Float'>
    readonly Description: FieldRef<"Movie", 'String'>
    readonly Release_date: FieldRef<"Movie", 'DateTime'>
    readonly Poster_url: FieldRef<"Movie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie.movie_actors
   */
  export type Movie$movie_actorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_Actor
     */
    select?: Movie_ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_Actor
     */
    omit?: Movie_ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_ActorInclude<ExtArgs> | null
    where?: Movie_ActorWhereInput
    orderBy?: Movie_ActorOrderByWithRelationInput | Movie_ActorOrderByWithRelationInput[]
    cursor?: Movie_ActorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Movie_ActorScalarFieldEnum | Movie_ActorScalarFieldEnum[]
  }

  /**
   * Movie.reviews
   */
  export type Movie$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Movie.shows
   */
  export type Movie$showsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    where?: ShowWhereInput
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    cursor?: ShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model Actor
   */

  export type AggregateActor = {
    _count: ActorCountAggregateOutputType | null
    _avg: ActorAvgAggregateOutputType | null
    _sum: ActorSumAggregateOutputType | null
    _min: ActorMinAggregateOutputType | null
    _max: ActorMaxAggregateOutputType | null
  }

  export type ActorAvgAggregateOutputType = {
    Actor_Id: number | null
  }

  export type ActorSumAggregateOutputType = {
    Actor_Id: number | null
  }

  export type ActorMinAggregateOutputType = {
    Actor_Id: number | null
    Name: string | null
    Created_At: Date | null
    actor_pic: string | null
  }

  export type ActorMaxAggregateOutputType = {
    Actor_Id: number | null
    Name: string | null
    Created_At: Date | null
    actor_pic: string | null
  }

  export type ActorCountAggregateOutputType = {
    Actor_Id: number
    Name: number
    Created_At: number
    actor_pic: number
    _all: number
  }


  export type ActorAvgAggregateInputType = {
    Actor_Id?: true
  }

  export type ActorSumAggregateInputType = {
    Actor_Id?: true
  }

  export type ActorMinAggregateInputType = {
    Actor_Id?: true
    Name?: true
    Created_At?: true
    actor_pic?: true
  }

  export type ActorMaxAggregateInputType = {
    Actor_Id?: true
    Name?: true
    Created_At?: true
    actor_pic?: true
  }

  export type ActorCountAggregateInputType = {
    Actor_Id?: true
    Name?: true
    Created_At?: true
    actor_pic?: true
    _all?: true
  }

  export type ActorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actor to aggregate.
     */
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actors
    **/
    _count?: true | ActorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActorMaxAggregateInputType
  }

  export type GetActorAggregateType<T extends ActorAggregateArgs> = {
        [P in keyof T & keyof AggregateActor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActor[P]>
      : GetScalarType<T[P], AggregateActor[P]>
  }




  export type ActorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActorWhereInput
    orderBy?: ActorOrderByWithAggregationInput | ActorOrderByWithAggregationInput[]
    by: ActorScalarFieldEnum[] | ActorScalarFieldEnum
    having?: ActorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActorCountAggregateInputType | true
    _avg?: ActorAvgAggregateInputType
    _sum?: ActorSumAggregateInputType
    _min?: ActorMinAggregateInputType
    _max?: ActorMaxAggregateInputType
  }

  export type ActorGroupByOutputType = {
    Actor_Id: number
    Name: string
    Created_At: Date | null
    actor_pic: string | null
    _count: ActorCountAggregateOutputType | null
    _avg: ActorAvgAggregateOutputType | null
    _sum: ActorSumAggregateOutputType | null
    _min: ActorMinAggregateOutputType | null
    _max: ActorMaxAggregateOutputType | null
  }

  type GetActorGroupByPayload<T extends ActorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActorGroupByOutputType[P]>
            : GetScalarType<T[P], ActorGroupByOutputType[P]>
        }
      >
    >


  export type ActorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Actor_Id?: boolean
    Name?: boolean
    Created_At?: boolean
    actor_pic?: boolean
    movie_actors?: boolean | Actor$movie_actorsArgs<ExtArgs>
    _count?: boolean | ActorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actor"]>



  export type ActorSelectScalar = {
    Actor_Id?: boolean
    Name?: boolean
    Created_At?: boolean
    actor_pic?: boolean
  }

  export type ActorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Actor_Id" | "Name" | "Created_At" | "actor_pic", ExtArgs["result"]["actor"]>
  export type ActorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie_actors?: boolean | Actor$movie_actorsArgs<ExtArgs>
    _count?: boolean | ActorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ActorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actor"
    objects: {
      movie_actors: Prisma.$Movie_ActorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Actor_Id: number
      Name: string
      Created_At: Date | null
      actor_pic: string | null
    }, ExtArgs["result"]["actor"]>
    composites: {}
  }

  type ActorGetPayload<S extends boolean | null | undefined | ActorDefaultArgs> = $Result.GetResult<Prisma.$ActorPayload, S>

  type ActorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActorCountAggregateInputType | true
    }

  export interface ActorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actor'], meta: { name: 'Actor' } }
    /**
     * Find zero or one Actor that matches the filter.
     * @param {ActorFindUniqueArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActorFindUniqueArgs>(args: SelectSubset<T, ActorFindUniqueArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActorFindUniqueOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActorFindUniqueOrThrowArgs>(args: SelectSubset<T, ActorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindFirstArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActorFindFirstArgs>(args?: SelectSubset<T, ActorFindFirstArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindFirstOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActorFindFirstOrThrowArgs>(args?: SelectSubset<T, ActorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actors
     * const actors = await prisma.actor.findMany()
     * 
     * // Get first 10 Actors
     * const actors = await prisma.actor.findMany({ take: 10 })
     * 
     * // Only select the `Actor_Id`
     * const actorWithActor_IdOnly = await prisma.actor.findMany({ select: { Actor_Id: true } })
     * 
     */
    findMany<T extends ActorFindManyArgs>(args?: SelectSubset<T, ActorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actor.
     * @param {ActorCreateArgs} args - Arguments to create a Actor.
     * @example
     * // Create one Actor
     * const Actor = await prisma.actor.create({
     *   data: {
     *     // ... data to create a Actor
     *   }
     * })
     * 
     */
    create<T extends ActorCreateArgs>(args: SelectSubset<T, ActorCreateArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actors.
     * @param {ActorCreateManyArgs} args - Arguments to create many Actors.
     * @example
     * // Create many Actors
     * const actor = await prisma.actor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActorCreateManyArgs>(args?: SelectSubset<T, ActorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Actor.
     * @param {ActorDeleteArgs} args - Arguments to delete one Actor.
     * @example
     * // Delete one Actor
     * const Actor = await prisma.actor.delete({
     *   where: {
     *     // ... filter to delete one Actor
     *   }
     * })
     * 
     */
    delete<T extends ActorDeleteArgs>(args: SelectSubset<T, ActorDeleteArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actor.
     * @param {ActorUpdateArgs} args - Arguments to update one Actor.
     * @example
     * // Update one Actor
     * const actor = await prisma.actor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActorUpdateArgs>(args: SelectSubset<T, ActorUpdateArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actors.
     * @param {ActorDeleteManyArgs} args - Arguments to filter Actors to delete.
     * @example
     * // Delete a few Actors
     * const { count } = await prisma.actor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActorDeleteManyArgs>(args?: SelectSubset<T, ActorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actors
     * const actor = await prisma.actor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActorUpdateManyArgs>(args: SelectSubset<T, ActorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Actor.
     * @param {ActorUpsertArgs} args - Arguments to update or create a Actor.
     * @example
     * // Update or create a Actor
     * const actor = await prisma.actor.upsert({
     *   create: {
     *     // ... data to create a Actor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actor we want to update
     *   }
     * })
     */
    upsert<T extends ActorUpsertArgs>(args: SelectSubset<T, ActorUpsertArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorCountArgs} args - Arguments to filter Actors to count.
     * @example
     * // Count the number of Actors
     * const count = await prisma.actor.count({
     *   where: {
     *     // ... the filter for the Actors we want to count
     *   }
     * })
    **/
    count<T extends ActorCountArgs>(
      args?: Subset<T, ActorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActorAggregateArgs>(args: Subset<T, ActorAggregateArgs>): Prisma.PrismaPromise<GetActorAggregateType<T>>

    /**
     * Group by Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorGroupByArgs} args - Group by arguments.
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
      T extends ActorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActorGroupByArgs['orderBy'] }
        : { orderBy?: ActorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actor model
   */
  readonly fields: ActorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie_actors<T extends Actor$movie_actorsArgs<ExtArgs> = {}>(args?: Subset<T, Actor$movie_actorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Movie_ActorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Actor model
   */
  interface ActorFieldRefs {
    readonly Actor_Id: FieldRef<"Actor", 'Int'>
    readonly Name: FieldRef<"Actor", 'String'>
    readonly Created_At: FieldRef<"Actor", 'DateTime'>
    readonly actor_pic: FieldRef<"Actor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Actor findUnique
   */
  export type ActorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actor to fetch.
     */
    where: ActorWhereUniqueInput
  }

  /**
   * Actor findUniqueOrThrow
   */
  export type ActorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actor to fetch.
     */
    where: ActorWhereUniqueInput
  }

  /**
   * Actor findFirst
   */
  export type ActorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actor to fetch.
     */
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actors.
     */
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actors.
     */
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * Actor findFirstOrThrow
   */
  export type ActorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actor to fetch.
     */
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actors.
     */
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actors.
     */
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * Actor findMany
   */
  export type ActorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actors.
     */
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * Actor create
   */
  export type ActorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * The data needed to create a Actor.
     */
    data: XOR<ActorCreateInput, ActorUncheckedCreateInput>
  }

  /**
   * Actor createMany
   */
  export type ActorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actors.
     */
    data: ActorCreateManyInput | ActorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actor update
   */
  export type ActorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * The data needed to update a Actor.
     */
    data: XOR<ActorUpdateInput, ActorUncheckedUpdateInput>
    /**
     * Choose, which Actor to update.
     */
    where: ActorWhereUniqueInput
  }

  /**
   * Actor updateMany
   */
  export type ActorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actors.
     */
    data: XOR<ActorUpdateManyMutationInput, ActorUncheckedUpdateManyInput>
    /**
     * Filter which Actors to update
     */
    where?: ActorWhereInput
    /**
     * Limit how many Actors to update.
     */
    limit?: number
  }

  /**
   * Actor upsert
   */
  export type ActorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * The filter to search for the Actor to update in case it exists.
     */
    where: ActorWhereUniqueInput
    /**
     * In case the Actor found by the `where` argument doesn't exist, create a new Actor with this data.
     */
    create: XOR<ActorCreateInput, ActorUncheckedCreateInput>
    /**
     * In case the Actor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActorUpdateInput, ActorUncheckedUpdateInput>
  }

  /**
   * Actor delete
   */
  export type ActorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter which Actor to delete.
     */
    where: ActorWhereUniqueInput
  }

  /**
   * Actor deleteMany
   */
  export type ActorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actors to delete
     */
    where?: ActorWhereInput
    /**
     * Limit how many Actors to delete.
     */
    limit?: number
  }

  /**
   * Actor.movie_actors
   */
  export type Actor$movie_actorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_Actor
     */
    select?: Movie_ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_Actor
     */
    omit?: Movie_ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_ActorInclude<ExtArgs> | null
    where?: Movie_ActorWhereInput
    orderBy?: Movie_ActorOrderByWithRelationInput | Movie_ActorOrderByWithRelationInput[]
    cursor?: Movie_ActorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Movie_ActorScalarFieldEnum | Movie_ActorScalarFieldEnum[]
  }

  /**
   * Actor without action
   */
  export type ActorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actor
     */
    omit?: ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
  }


  /**
   * Model Movie_Actor
   */

  export type AggregateMovie_Actor = {
    _count: Movie_ActorCountAggregateOutputType | null
    _avg: Movie_ActorAvgAggregateOutputType | null
    _sum: Movie_ActorSumAggregateOutputType | null
    _min: Movie_ActorMinAggregateOutputType | null
    _max: Movie_ActorMaxAggregateOutputType | null
  }

  export type Movie_ActorAvgAggregateOutputType = {
    movie_Id: number | null
    Actor_Id: number | null
  }

  export type Movie_ActorSumAggregateOutputType = {
    movie_Id: number | null
    Actor_Id: number | null
  }

  export type Movie_ActorMinAggregateOutputType = {
    movie_Id: number | null
    Actor_Id: number | null
    Role_Name: string | null
  }

  export type Movie_ActorMaxAggregateOutputType = {
    movie_Id: number | null
    Actor_Id: number | null
    Role_Name: string | null
  }

  export type Movie_ActorCountAggregateOutputType = {
    movie_Id: number
    Actor_Id: number
    Role_Name: number
    _all: number
  }


  export type Movie_ActorAvgAggregateInputType = {
    movie_Id?: true
    Actor_Id?: true
  }

  export type Movie_ActorSumAggregateInputType = {
    movie_Id?: true
    Actor_Id?: true
  }

  export type Movie_ActorMinAggregateInputType = {
    movie_Id?: true
    Actor_Id?: true
    Role_Name?: true
  }

  export type Movie_ActorMaxAggregateInputType = {
    movie_Id?: true
    Actor_Id?: true
    Role_Name?: true
  }

  export type Movie_ActorCountAggregateInputType = {
    movie_Id?: true
    Actor_Id?: true
    Role_Name?: true
    _all?: true
  }

  export type Movie_ActorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie_Actor to aggregate.
     */
    where?: Movie_ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movie_Actors to fetch.
     */
    orderBy?: Movie_ActorOrderByWithRelationInput | Movie_ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Movie_ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movie_Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movie_Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movie_Actors
    **/
    _count?: true | Movie_ActorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Movie_ActorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Movie_ActorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Movie_ActorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Movie_ActorMaxAggregateInputType
  }

  export type GetMovie_ActorAggregateType<T extends Movie_ActorAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie_Actor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie_Actor[P]>
      : GetScalarType<T[P], AggregateMovie_Actor[P]>
  }




  export type Movie_ActorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Movie_ActorWhereInput
    orderBy?: Movie_ActorOrderByWithAggregationInput | Movie_ActorOrderByWithAggregationInput[]
    by: Movie_ActorScalarFieldEnum[] | Movie_ActorScalarFieldEnum
    having?: Movie_ActorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Movie_ActorCountAggregateInputType | true
    _avg?: Movie_ActorAvgAggregateInputType
    _sum?: Movie_ActorSumAggregateInputType
    _min?: Movie_ActorMinAggregateInputType
    _max?: Movie_ActorMaxAggregateInputType
  }

  export type Movie_ActorGroupByOutputType = {
    movie_Id: number
    Actor_Id: number
    Role_Name: string | null
    _count: Movie_ActorCountAggregateOutputType | null
    _avg: Movie_ActorAvgAggregateOutputType | null
    _sum: Movie_ActorSumAggregateOutputType | null
    _min: Movie_ActorMinAggregateOutputType | null
    _max: Movie_ActorMaxAggregateOutputType | null
  }

  type GetMovie_ActorGroupByPayload<T extends Movie_ActorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Movie_ActorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Movie_ActorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Movie_ActorGroupByOutputType[P]>
            : GetScalarType<T[P], Movie_ActorGroupByOutputType[P]>
        }
      >
    >


  export type Movie_ActorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movie_Id?: boolean
    Actor_Id?: boolean
    Role_Name?: boolean
    movies?: boolean | MovieDefaultArgs<ExtArgs>
    actor?: boolean | ActorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie_Actor"]>



  export type Movie_ActorSelectScalar = {
    movie_Id?: boolean
    Actor_Id?: boolean
    Role_Name?: boolean
  }

  export type Movie_ActorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"movie_Id" | "Actor_Id" | "Role_Name", ExtArgs["result"]["movie_Actor"]>
  export type Movie_ActorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MovieDefaultArgs<ExtArgs>
    actor?: boolean | ActorDefaultArgs<ExtArgs>
  }

  export type $Movie_ActorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie_Actor"
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs>
      actor: Prisma.$ActorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      movie_Id: number
      Actor_Id: number
      Role_Name: string | null
    }, ExtArgs["result"]["movie_Actor"]>
    composites: {}
  }

  type Movie_ActorGetPayload<S extends boolean | null | undefined | Movie_ActorDefaultArgs> = $Result.GetResult<Prisma.$Movie_ActorPayload, S>

  type Movie_ActorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Movie_ActorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Movie_ActorCountAggregateInputType | true
    }

  export interface Movie_ActorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie_Actor'], meta: { name: 'Movie_Actor' } }
    /**
     * Find zero or one Movie_Actor that matches the filter.
     * @param {Movie_ActorFindUniqueArgs} args - Arguments to find a Movie_Actor
     * @example
     * // Get one Movie_Actor
     * const movie_Actor = await prisma.movie_Actor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Movie_ActorFindUniqueArgs>(args: SelectSubset<T, Movie_ActorFindUniqueArgs<ExtArgs>>): Prisma__Movie_ActorClient<$Result.GetResult<Prisma.$Movie_ActorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie_Actor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Movie_ActorFindUniqueOrThrowArgs} args - Arguments to find a Movie_Actor
     * @example
     * // Get one Movie_Actor
     * const movie_Actor = await prisma.movie_Actor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Movie_ActorFindUniqueOrThrowArgs>(args: SelectSubset<T, Movie_ActorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Movie_ActorClient<$Result.GetResult<Prisma.$Movie_ActorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie_Actor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_ActorFindFirstArgs} args - Arguments to find a Movie_Actor
     * @example
     * // Get one Movie_Actor
     * const movie_Actor = await prisma.movie_Actor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Movie_ActorFindFirstArgs>(args?: SelectSubset<T, Movie_ActorFindFirstArgs<ExtArgs>>): Prisma__Movie_ActorClient<$Result.GetResult<Prisma.$Movie_ActorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie_Actor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_ActorFindFirstOrThrowArgs} args - Arguments to find a Movie_Actor
     * @example
     * // Get one Movie_Actor
     * const movie_Actor = await prisma.movie_Actor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Movie_ActorFindFirstOrThrowArgs>(args?: SelectSubset<T, Movie_ActorFindFirstOrThrowArgs<ExtArgs>>): Prisma__Movie_ActorClient<$Result.GetResult<Prisma.$Movie_ActorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movie_Actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_ActorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movie_Actors
     * const movie_Actors = await prisma.movie_Actor.findMany()
     * 
     * // Get first 10 Movie_Actors
     * const movie_Actors = await prisma.movie_Actor.findMany({ take: 10 })
     * 
     * // Only select the `movie_Id`
     * const movie_ActorWithMovie_IdOnly = await prisma.movie_Actor.findMany({ select: { movie_Id: true } })
     * 
     */
    findMany<T extends Movie_ActorFindManyArgs>(args?: SelectSubset<T, Movie_ActorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Movie_ActorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie_Actor.
     * @param {Movie_ActorCreateArgs} args - Arguments to create a Movie_Actor.
     * @example
     * // Create one Movie_Actor
     * const Movie_Actor = await prisma.movie_Actor.create({
     *   data: {
     *     // ... data to create a Movie_Actor
     *   }
     * })
     * 
     */
    create<T extends Movie_ActorCreateArgs>(args: SelectSubset<T, Movie_ActorCreateArgs<ExtArgs>>): Prisma__Movie_ActorClient<$Result.GetResult<Prisma.$Movie_ActorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movie_Actors.
     * @param {Movie_ActorCreateManyArgs} args - Arguments to create many Movie_Actors.
     * @example
     * // Create many Movie_Actors
     * const movie_Actor = await prisma.movie_Actor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Movie_ActorCreateManyArgs>(args?: SelectSubset<T, Movie_ActorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movie_Actor.
     * @param {Movie_ActorDeleteArgs} args - Arguments to delete one Movie_Actor.
     * @example
     * // Delete one Movie_Actor
     * const Movie_Actor = await prisma.movie_Actor.delete({
     *   where: {
     *     // ... filter to delete one Movie_Actor
     *   }
     * })
     * 
     */
    delete<T extends Movie_ActorDeleteArgs>(args: SelectSubset<T, Movie_ActorDeleteArgs<ExtArgs>>): Prisma__Movie_ActorClient<$Result.GetResult<Prisma.$Movie_ActorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie_Actor.
     * @param {Movie_ActorUpdateArgs} args - Arguments to update one Movie_Actor.
     * @example
     * // Update one Movie_Actor
     * const movie_Actor = await prisma.movie_Actor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Movie_ActorUpdateArgs>(args: SelectSubset<T, Movie_ActorUpdateArgs<ExtArgs>>): Prisma__Movie_ActorClient<$Result.GetResult<Prisma.$Movie_ActorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movie_Actors.
     * @param {Movie_ActorDeleteManyArgs} args - Arguments to filter Movie_Actors to delete.
     * @example
     * // Delete a few Movie_Actors
     * const { count } = await prisma.movie_Actor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Movie_ActorDeleteManyArgs>(args?: SelectSubset<T, Movie_ActorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movie_Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_ActorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movie_Actors
     * const movie_Actor = await prisma.movie_Actor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Movie_ActorUpdateManyArgs>(args: SelectSubset<T, Movie_ActorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie_Actor.
     * @param {Movie_ActorUpsertArgs} args - Arguments to update or create a Movie_Actor.
     * @example
     * // Update or create a Movie_Actor
     * const movie_Actor = await prisma.movie_Actor.upsert({
     *   create: {
     *     // ... data to create a Movie_Actor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie_Actor we want to update
     *   }
     * })
     */
    upsert<T extends Movie_ActorUpsertArgs>(args: SelectSubset<T, Movie_ActorUpsertArgs<ExtArgs>>): Prisma__Movie_ActorClient<$Result.GetResult<Prisma.$Movie_ActorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movie_Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_ActorCountArgs} args - Arguments to filter Movie_Actors to count.
     * @example
     * // Count the number of Movie_Actors
     * const count = await prisma.movie_Actor.count({
     *   where: {
     *     // ... the filter for the Movie_Actors we want to count
     *   }
     * })
    **/
    count<T extends Movie_ActorCountArgs>(
      args?: Subset<T, Movie_ActorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Movie_ActorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie_Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_ActorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Movie_ActorAggregateArgs>(args: Subset<T, Movie_ActorAggregateArgs>): Prisma.PrismaPromise<GetMovie_ActorAggregateType<T>>

    /**
     * Group by Movie_Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_ActorGroupByArgs} args - Group by arguments.
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
      T extends Movie_ActorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Movie_ActorGroupByArgs['orderBy'] }
        : { orderBy?: Movie_ActorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Movie_ActorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovie_ActorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie_Actor model
   */
  readonly fields: Movie_ActorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie_Actor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Movie_ActorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends ActorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActorDefaultArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Movie_Actor model
   */
  interface Movie_ActorFieldRefs {
    readonly movie_Id: FieldRef<"Movie_Actor", 'Int'>
    readonly Actor_Id: FieldRef<"Movie_Actor", 'Int'>
    readonly Role_Name: FieldRef<"Movie_Actor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Movie_Actor findUnique
   */
  export type Movie_ActorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_Actor
     */
    select?: Movie_ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_Actor
     */
    omit?: Movie_ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_ActorInclude<ExtArgs> | null
    /**
     * Filter, which Movie_Actor to fetch.
     */
    where: Movie_ActorWhereUniqueInput
  }

  /**
   * Movie_Actor findUniqueOrThrow
   */
  export type Movie_ActorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_Actor
     */
    select?: Movie_ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_Actor
     */
    omit?: Movie_ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_ActorInclude<ExtArgs> | null
    /**
     * Filter, which Movie_Actor to fetch.
     */
    where: Movie_ActorWhereUniqueInput
  }

  /**
   * Movie_Actor findFirst
   */
  export type Movie_ActorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_Actor
     */
    select?: Movie_ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_Actor
     */
    omit?: Movie_ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_ActorInclude<ExtArgs> | null
    /**
     * Filter, which Movie_Actor to fetch.
     */
    where?: Movie_ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movie_Actors to fetch.
     */
    orderBy?: Movie_ActorOrderByWithRelationInput | Movie_ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movie_Actors.
     */
    cursor?: Movie_ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movie_Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movie_Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movie_Actors.
     */
    distinct?: Movie_ActorScalarFieldEnum | Movie_ActorScalarFieldEnum[]
  }

  /**
   * Movie_Actor findFirstOrThrow
   */
  export type Movie_ActorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_Actor
     */
    select?: Movie_ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_Actor
     */
    omit?: Movie_ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_ActorInclude<ExtArgs> | null
    /**
     * Filter, which Movie_Actor to fetch.
     */
    where?: Movie_ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movie_Actors to fetch.
     */
    orderBy?: Movie_ActorOrderByWithRelationInput | Movie_ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movie_Actors.
     */
    cursor?: Movie_ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movie_Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movie_Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movie_Actors.
     */
    distinct?: Movie_ActorScalarFieldEnum | Movie_ActorScalarFieldEnum[]
  }

  /**
   * Movie_Actor findMany
   */
  export type Movie_ActorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_Actor
     */
    select?: Movie_ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_Actor
     */
    omit?: Movie_ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_ActorInclude<ExtArgs> | null
    /**
     * Filter, which Movie_Actors to fetch.
     */
    where?: Movie_ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movie_Actors to fetch.
     */
    orderBy?: Movie_ActorOrderByWithRelationInput | Movie_ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movie_Actors.
     */
    cursor?: Movie_ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movie_Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movie_Actors.
     */
    skip?: number
    distinct?: Movie_ActorScalarFieldEnum | Movie_ActorScalarFieldEnum[]
  }

  /**
   * Movie_Actor create
   */
  export type Movie_ActorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_Actor
     */
    select?: Movie_ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_Actor
     */
    omit?: Movie_ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_ActorInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie_Actor.
     */
    data: XOR<Movie_ActorCreateInput, Movie_ActorUncheckedCreateInput>
  }

  /**
   * Movie_Actor createMany
   */
  export type Movie_ActorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movie_Actors.
     */
    data: Movie_ActorCreateManyInput | Movie_ActorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie_Actor update
   */
  export type Movie_ActorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_Actor
     */
    select?: Movie_ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_Actor
     */
    omit?: Movie_ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_ActorInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie_Actor.
     */
    data: XOR<Movie_ActorUpdateInput, Movie_ActorUncheckedUpdateInput>
    /**
     * Choose, which Movie_Actor to update.
     */
    where: Movie_ActorWhereUniqueInput
  }

  /**
   * Movie_Actor updateMany
   */
  export type Movie_ActorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movie_Actors.
     */
    data: XOR<Movie_ActorUpdateManyMutationInput, Movie_ActorUncheckedUpdateManyInput>
    /**
     * Filter which Movie_Actors to update
     */
    where?: Movie_ActorWhereInput
    /**
     * Limit how many Movie_Actors to update.
     */
    limit?: number
  }

  /**
   * Movie_Actor upsert
   */
  export type Movie_ActorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_Actor
     */
    select?: Movie_ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_Actor
     */
    omit?: Movie_ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_ActorInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie_Actor to update in case it exists.
     */
    where: Movie_ActorWhereUniqueInput
    /**
     * In case the Movie_Actor found by the `where` argument doesn't exist, create a new Movie_Actor with this data.
     */
    create: XOR<Movie_ActorCreateInput, Movie_ActorUncheckedCreateInput>
    /**
     * In case the Movie_Actor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Movie_ActorUpdateInput, Movie_ActorUncheckedUpdateInput>
  }

  /**
   * Movie_Actor delete
   */
  export type Movie_ActorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_Actor
     */
    select?: Movie_ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_Actor
     */
    omit?: Movie_ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_ActorInclude<ExtArgs> | null
    /**
     * Filter which Movie_Actor to delete.
     */
    where: Movie_ActorWhereUniqueInput
  }

  /**
   * Movie_Actor deleteMany
   */
  export type Movie_ActorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie_Actors to delete
     */
    where?: Movie_ActorWhereInput
    /**
     * Limit how many Movie_Actors to delete.
     */
    limit?: number
  }

  /**
   * Movie_Actor without action
   */
  export type Movie_ActorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_Actor
     */
    select?: Movie_ActorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_Actor
     */
    omit?: Movie_ActorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_ActorInclude<ExtArgs> | null
  }


  /**
   * Model Screen
   */

  export type AggregateScreen = {
    _count: ScreenCountAggregateOutputType | null
    _avg: ScreenAvgAggregateOutputType | null
    _sum: ScreenSumAggregateOutputType | null
    _min: ScreenMinAggregateOutputType | null
    _max: ScreenMaxAggregateOutputType | null
  }

  export type ScreenAvgAggregateOutputType = {
    screen_no: number | null
    theatre_Id: number | null
    No_of_seats: number | null
  }

  export type ScreenSumAggregateOutputType = {
    screen_no: number | null
    theatre_Id: number | null
    No_of_seats: number | null
  }

  export type ScreenMinAggregateOutputType = {
    screen_no: number | null
    theatre_Id: number | null
    Screen_name: string | null
    No_of_seats: number | null
  }

  export type ScreenMaxAggregateOutputType = {
    screen_no: number | null
    theatre_Id: number | null
    Screen_name: string | null
    No_of_seats: number | null
  }

  export type ScreenCountAggregateOutputType = {
    screen_no: number
    theatre_Id: number
    Screen_name: number
    No_of_seats: number
    Layout_structure: number
    _all: number
  }


  export type ScreenAvgAggregateInputType = {
    screen_no?: true
    theatre_Id?: true
    No_of_seats?: true
  }

  export type ScreenSumAggregateInputType = {
    screen_no?: true
    theatre_Id?: true
    No_of_seats?: true
  }

  export type ScreenMinAggregateInputType = {
    screen_no?: true
    theatre_Id?: true
    Screen_name?: true
    No_of_seats?: true
  }

  export type ScreenMaxAggregateInputType = {
    screen_no?: true
    theatre_Id?: true
    Screen_name?: true
    No_of_seats?: true
  }

  export type ScreenCountAggregateInputType = {
    screen_no?: true
    theatre_Id?: true
    Screen_name?: true
    No_of_seats?: true
    Layout_structure?: true
    _all?: true
  }

  export type ScreenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screen to aggregate.
     */
    where?: ScreenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screens to fetch.
     */
    orderBy?: ScreenOrderByWithRelationInput | ScreenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScreenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Screens
    **/
    _count?: true | ScreenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScreenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScreenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScreenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScreenMaxAggregateInputType
  }

  export type GetScreenAggregateType<T extends ScreenAggregateArgs> = {
        [P in keyof T & keyof AggregateScreen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreen[P]>
      : GetScalarType<T[P], AggregateScreen[P]>
  }




  export type ScreenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenWhereInput
    orderBy?: ScreenOrderByWithAggregationInput | ScreenOrderByWithAggregationInput[]
    by: ScreenScalarFieldEnum[] | ScreenScalarFieldEnum
    having?: ScreenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScreenCountAggregateInputType | true
    _avg?: ScreenAvgAggregateInputType
    _sum?: ScreenSumAggregateInputType
    _min?: ScreenMinAggregateInputType
    _max?: ScreenMaxAggregateInputType
  }

  export type ScreenGroupByOutputType = {
    screen_no: number
    theatre_Id: number
    Screen_name: string | null
    No_of_seats: number | null
    Layout_structure: JsonValue | null
    _count: ScreenCountAggregateOutputType | null
    _avg: ScreenAvgAggregateOutputType | null
    _sum: ScreenSumAggregateOutputType | null
    _min: ScreenMinAggregateOutputType | null
    _max: ScreenMaxAggregateOutputType | null
  }

  type GetScreenGroupByPayload<T extends ScreenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScreenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScreenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScreenGroupByOutputType[P]>
            : GetScalarType<T[P], ScreenGroupByOutputType[P]>
        }
      >
    >


  export type ScreenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    screen_no?: boolean
    theatre_Id?: boolean
    Screen_name?: boolean
    No_of_seats?: boolean
    Layout_structure?: boolean
    theatre?: boolean | theatreDefaultArgs<ExtArgs>
    shows?: boolean | Screen$showsArgs<ExtArgs>
    _count?: boolean | ScreenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screen"]>



  export type ScreenSelectScalar = {
    screen_no?: boolean
    theatre_Id?: boolean
    Screen_name?: boolean
    No_of_seats?: boolean
    Layout_structure?: boolean
  }

  export type ScreenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"screen_no" | "theatre_Id" | "Screen_name" | "No_of_seats" | "Layout_structure", ExtArgs["result"]["screen"]>
  export type ScreenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theatre?: boolean | theatreDefaultArgs<ExtArgs>
    shows?: boolean | Screen$showsArgs<ExtArgs>
    _count?: boolean | ScreenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ScreenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Screen"
    objects: {
      theatre: Prisma.$theatrePayload<ExtArgs>
      shows: Prisma.$ShowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      screen_no: number
      theatre_Id: number
      Screen_name: string | null
      No_of_seats: number | null
      Layout_structure: Prisma.JsonValue | null
    }, ExtArgs["result"]["screen"]>
    composites: {}
  }

  type ScreenGetPayload<S extends boolean | null | undefined | ScreenDefaultArgs> = $Result.GetResult<Prisma.$ScreenPayload, S>

  type ScreenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScreenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScreenCountAggregateInputType | true
    }

  export interface ScreenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Screen'], meta: { name: 'Screen' } }
    /**
     * Find zero or one Screen that matches the filter.
     * @param {ScreenFindUniqueArgs} args - Arguments to find a Screen
     * @example
     * // Get one Screen
     * const screen = await prisma.screen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScreenFindUniqueArgs>(args: SelectSubset<T, ScreenFindUniqueArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Screen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScreenFindUniqueOrThrowArgs} args - Arguments to find a Screen
     * @example
     * // Get one Screen
     * const screen = await prisma.screen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScreenFindUniqueOrThrowArgs>(args: SelectSubset<T, ScreenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Screen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenFindFirstArgs} args - Arguments to find a Screen
     * @example
     * // Get one Screen
     * const screen = await prisma.screen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScreenFindFirstArgs>(args?: SelectSubset<T, ScreenFindFirstArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Screen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenFindFirstOrThrowArgs} args - Arguments to find a Screen
     * @example
     * // Get one Screen
     * const screen = await prisma.screen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScreenFindFirstOrThrowArgs>(args?: SelectSubset<T, ScreenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Screens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Screens
     * const screens = await prisma.screen.findMany()
     * 
     * // Get first 10 Screens
     * const screens = await prisma.screen.findMany({ take: 10 })
     * 
     * // Only select the `screen_no`
     * const screenWithScreen_noOnly = await prisma.screen.findMany({ select: { screen_no: true } })
     * 
     */
    findMany<T extends ScreenFindManyArgs>(args?: SelectSubset<T, ScreenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Screen.
     * @param {ScreenCreateArgs} args - Arguments to create a Screen.
     * @example
     * // Create one Screen
     * const Screen = await prisma.screen.create({
     *   data: {
     *     // ... data to create a Screen
     *   }
     * })
     * 
     */
    create<T extends ScreenCreateArgs>(args: SelectSubset<T, ScreenCreateArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Screens.
     * @param {ScreenCreateManyArgs} args - Arguments to create many Screens.
     * @example
     * // Create many Screens
     * const screen = await prisma.screen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScreenCreateManyArgs>(args?: SelectSubset<T, ScreenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Screen.
     * @param {ScreenDeleteArgs} args - Arguments to delete one Screen.
     * @example
     * // Delete one Screen
     * const Screen = await prisma.screen.delete({
     *   where: {
     *     // ... filter to delete one Screen
     *   }
     * })
     * 
     */
    delete<T extends ScreenDeleteArgs>(args: SelectSubset<T, ScreenDeleteArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Screen.
     * @param {ScreenUpdateArgs} args - Arguments to update one Screen.
     * @example
     * // Update one Screen
     * const screen = await prisma.screen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScreenUpdateArgs>(args: SelectSubset<T, ScreenUpdateArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Screens.
     * @param {ScreenDeleteManyArgs} args - Arguments to filter Screens to delete.
     * @example
     * // Delete a few Screens
     * const { count } = await prisma.screen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScreenDeleteManyArgs>(args?: SelectSubset<T, ScreenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Screens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Screens
     * const screen = await prisma.screen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScreenUpdateManyArgs>(args: SelectSubset<T, ScreenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Screen.
     * @param {ScreenUpsertArgs} args - Arguments to update or create a Screen.
     * @example
     * // Update or create a Screen
     * const screen = await prisma.screen.upsert({
     *   create: {
     *     // ... data to create a Screen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Screen we want to update
     *   }
     * })
     */
    upsert<T extends ScreenUpsertArgs>(args: SelectSubset<T, ScreenUpsertArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Screens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenCountArgs} args - Arguments to filter Screens to count.
     * @example
     * // Count the number of Screens
     * const count = await prisma.screen.count({
     *   where: {
     *     // ... the filter for the Screens we want to count
     *   }
     * })
    **/
    count<T extends ScreenCountArgs>(
      args?: Subset<T, ScreenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScreenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Screen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScreenAggregateArgs>(args: Subset<T, ScreenAggregateArgs>): Prisma.PrismaPromise<GetScreenAggregateType<T>>

    /**
     * Group by Screen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenGroupByArgs} args - Group by arguments.
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
      T extends ScreenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScreenGroupByArgs['orderBy'] }
        : { orderBy?: ScreenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScreenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Screen model
   */
  readonly fields: ScreenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Screen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScreenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    theatre<T extends theatreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, theatreDefaultArgs<ExtArgs>>): Prisma__theatreClient<$Result.GetResult<Prisma.$theatrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shows<T extends Screen$showsArgs<ExtArgs> = {}>(args?: Subset<T, Screen$showsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Screen model
   */
  interface ScreenFieldRefs {
    readonly screen_no: FieldRef<"Screen", 'Int'>
    readonly theatre_Id: FieldRef<"Screen", 'Int'>
    readonly Screen_name: FieldRef<"Screen", 'String'>
    readonly No_of_seats: FieldRef<"Screen", 'Int'>
    readonly Layout_structure: FieldRef<"Screen", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Screen findUnique
   */
  export type ScreenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * Filter, which Screen to fetch.
     */
    where: ScreenWhereUniqueInput
  }

  /**
   * Screen findUniqueOrThrow
   */
  export type ScreenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * Filter, which Screen to fetch.
     */
    where: ScreenWhereUniqueInput
  }

  /**
   * Screen findFirst
   */
  export type ScreenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * Filter, which Screen to fetch.
     */
    where?: ScreenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screens to fetch.
     */
    orderBy?: ScreenOrderByWithRelationInput | ScreenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screens.
     */
    cursor?: ScreenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screens.
     */
    distinct?: ScreenScalarFieldEnum | ScreenScalarFieldEnum[]
  }

  /**
   * Screen findFirstOrThrow
   */
  export type ScreenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * Filter, which Screen to fetch.
     */
    where?: ScreenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screens to fetch.
     */
    orderBy?: ScreenOrderByWithRelationInput | ScreenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screens.
     */
    cursor?: ScreenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screens.
     */
    distinct?: ScreenScalarFieldEnum | ScreenScalarFieldEnum[]
  }

  /**
   * Screen findMany
   */
  export type ScreenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * Filter, which Screens to fetch.
     */
    where?: ScreenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screens to fetch.
     */
    orderBy?: ScreenOrderByWithRelationInput | ScreenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Screens.
     */
    cursor?: ScreenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screens.
     */
    skip?: number
    distinct?: ScreenScalarFieldEnum | ScreenScalarFieldEnum[]
  }

  /**
   * Screen create
   */
  export type ScreenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * The data needed to create a Screen.
     */
    data: XOR<ScreenCreateInput, ScreenUncheckedCreateInput>
  }

  /**
   * Screen createMany
   */
  export type ScreenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Screens.
     */
    data: ScreenCreateManyInput | ScreenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Screen update
   */
  export type ScreenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * The data needed to update a Screen.
     */
    data: XOR<ScreenUpdateInput, ScreenUncheckedUpdateInput>
    /**
     * Choose, which Screen to update.
     */
    where: ScreenWhereUniqueInput
  }

  /**
   * Screen updateMany
   */
  export type ScreenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Screens.
     */
    data: XOR<ScreenUpdateManyMutationInput, ScreenUncheckedUpdateManyInput>
    /**
     * Filter which Screens to update
     */
    where?: ScreenWhereInput
    /**
     * Limit how many Screens to update.
     */
    limit?: number
  }

  /**
   * Screen upsert
   */
  export type ScreenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * The filter to search for the Screen to update in case it exists.
     */
    where: ScreenWhereUniqueInput
    /**
     * In case the Screen found by the `where` argument doesn't exist, create a new Screen with this data.
     */
    create: XOR<ScreenCreateInput, ScreenUncheckedCreateInput>
    /**
     * In case the Screen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScreenUpdateInput, ScreenUncheckedUpdateInput>
  }

  /**
   * Screen delete
   */
  export type ScreenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * Filter which Screen to delete.
     */
    where: ScreenWhereUniqueInput
  }

  /**
   * Screen deleteMany
   */
  export type ScreenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screens to delete
     */
    where?: ScreenWhereInput
    /**
     * Limit how many Screens to delete.
     */
    limit?: number
  }

  /**
   * Screen.shows
   */
  export type Screen$showsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    where?: ShowWhereInput
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    cursor?: ShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Screen without action
   */
  export type ScreenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
  }


  /**
   * Model Show
   */

  export type AggregateShow = {
    _count: ShowCountAggregateOutputType | null
    _avg: ShowAvgAggregateOutputType | null
    _sum: ShowSumAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  export type ShowAvgAggregateOutputType = {
    Show_Id: number | null
    Movie_Id: number | null
    Theatre_Id: number | null
    Screen_no: number | null
  }

  export type ShowSumAggregateOutputType = {
    Show_Id: number | null
    Movie_Id: number | null
    Theatre_Id: number | null
    Screen_no: number | null
  }

  export type ShowMinAggregateOutputType = {
    Show_Id: number | null
    Movie_Id: number | null
    Theatre_Id: number | null
    Screen_no: number | null
    Show_date: Date | null
    Start_time: Date | null
    Show_dimension: $Enums.shows_Show_dimension | null
  }

  export type ShowMaxAggregateOutputType = {
    Show_Id: number | null
    Movie_Id: number | null
    Theatre_Id: number | null
    Screen_no: number | null
    Show_date: Date | null
    Start_time: Date | null
    Show_dimension: $Enums.shows_Show_dimension | null
  }

  export type ShowCountAggregateOutputType = {
    Show_Id: number
    Movie_Id: number
    Theatre_Id: number
    Screen_no: number
    Show_date: number
    Start_time: number
    Show_dimension: number
    _all: number
  }


  export type ShowAvgAggregateInputType = {
    Show_Id?: true
    Movie_Id?: true
    Theatre_Id?: true
    Screen_no?: true
  }

  export type ShowSumAggregateInputType = {
    Show_Id?: true
    Movie_Id?: true
    Theatre_Id?: true
    Screen_no?: true
  }

  export type ShowMinAggregateInputType = {
    Show_Id?: true
    Movie_Id?: true
    Theatre_Id?: true
    Screen_no?: true
    Show_date?: true
    Start_time?: true
    Show_dimension?: true
  }

  export type ShowMaxAggregateInputType = {
    Show_Id?: true
    Movie_Id?: true
    Theatre_Id?: true
    Screen_no?: true
    Show_date?: true
    Start_time?: true
    Show_dimension?: true
  }

  export type ShowCountAggregateInputType = {
    Show_Id?: true
    Movie_Id?: true
    Theatre_Id?: true
    Screen_no?: true
    Show_date?: true
    Start_time?: true
    Show_dimension?: true
    _all?: true
  }

  export type ShowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Show to aggregate.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shows
    **/
    _count?: true | ShowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowMaxAggregateInputType
  }

  export type GetShowAggregateType<T extends ShowAggregateArgs> = {
        [P in keyof T & keyof AggregateShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShow[P]>
      : GetScalarType<T[P], AggregateShow[P]>
  }




  export type ShowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowWhereInput
    orderBy?: ShowOrderByWithAggregationInput | ShowOrderByWithAggregationInput[]
    by: ShowScalarFieldEnum[] | ShowScalarFieldEnum
    having?: ShowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowCountAggregateInputType | true
    _avg?: ShowAvgAggregateInputType
    _sum?: ShowSumAggregateInputType
    _min?: ShowMinAggregateInputType
    _max?: ShowMaxAggregateInputType
  }

  export type ShowGroupByOutputType = {
    Show_Id: number
    Movie_Id: number
    Theatre_Id: number
    Screen_no: number
    Show_date: Date
    Start_time: Date
    Show_dimension: $Enums.shows_Show_dimension
    _count: ShowCountAggregateOutputType | null
    _avg: ShowAvgAggregateOutputType | null
    _sum: ShowSumAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  type GetShowGroupByPayload<T extends ShowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowGroupByOutputType[P]>
            : GetScalarType<T[P], ShowGroupByOutputType[P]>
        }
      >
    >


  export type ShowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Show_Id?: boolean
    Movie_Id?: boolean
    Theatre_Id?: boolean
    Screen_no?: boolean
    Show_date?: boolean
    Start_time?: boolean
    Show_dimension?: boolean
    booking?: boolean | Show$bookingArgs<ExtArgs>
    seats?: boolean | Show$seatsArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    theatre?: boolean | theatreDefaultArgs<ExtArgs>
    screens?: boolean | ScreenDefaultArgs<ExtArgs>
    _count?: boolean | ShowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["show"]>



  export type ShowSelectScalar = {
    Show_Id?: boolean
    Movie_Id?: boolean
    Theatre_Id?: boolean
    Screen_no?: boolean
    Show_date?: boolean
    Start_time?: boolean
    Show_dimension?: boolean
  }

  export type ShowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Show_Id" | "Movie_Id" | "Theatre_Id" | "Screen_no" | "Show_date" | "Start_time" | "Show_dimension", ExtArgs["result"]["show"]>
  export type ShowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | Show$bookingArgs<ExtArgs>
    seats?: boolean | Show$seatsArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    theatre?: boolean | theatreDefaultArgs<ExtArgs>
    screens?: boolean | ScreenDefaultArgs<ExtArgs>
    _count?: boolean | ShowCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Show"
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[]
      seats: Prisma.$SeatPayload<ExtArgs>[]
      movie: Prisma.$MoviePayload<ExtArgs>
      theatre: Prisma.$theatrePayload<ExtArgs>
      screens: Prisma.$ScreenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Show_Id: number
      Movie_Id: number
      Theatre_Id: number
      Screen_no: number
      Show_date: Date
      Start_time: Date
      Show_dimension: $Enums.shows_Show_dimension
    }, ExtArgs["result"]["show"]>
    composites: {}
  }

  type ShowGetPayload<S extends boolean | null | undefined | ShowDefaultArgs> = $Result.GetResult<Prisma.$ShowPayload, S>

  type ShowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowCountAggregateInputType | true
    }

  export interface ShowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Show'], meta: { name: 'Show' } }
    /**
     * Find zero or one Show that matches the filter.
     * @param {ShowFindUniqueArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowFindUniqueArgs>(args: SelectSubset<T, ShowFindUniqueArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Show that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowFindUniqueOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Show that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindFirstArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowFindFirstArgs>(args?: SelectSubset<T, ShowFindFirstArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Show that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindFirstOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shows
     * const shows = await prisma.show.findMany()
     * 
     * // Get first 10 Shows
     * const shows = await prisma.show.findMany({ take: 10 })
     * 
     * // Only select the `Show_Id`
     * const showWithShow_IdOnly = await prisma.show.findMany({ select: { Show_Id: true } })
     * 
     */
    findMany<T extends ShowFindManyArgs>(args?: SelectSubset<T, ShowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Show.
     * @param {ShowCreateArgs} args - Arguments to create a Show.
     * @example
     * // Create one Show
     * const Show = await prisma.show.create({
     *   data: {
     *     // ... data to create a Show
     *   }
     * })
     * 
     */
    create<T extends ShowCreateArgs>(args: SelectSubset<T, ShowCreateArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shows.
     * @param {ShowCreateManyArgs} args - Arguments to create many Shows.
     * @example
     * // Create many Shows
     * const show = await prisma.show.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowCreateManyArgs>(args?: SelectSubset<T, ShowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Show.
     * @param {ShowDeleteArgs} args - Arguments to delete one Show.
     * @example
     * // Delete one Show
     * const Show = await prisma.show.delete({
     *   where: {
     *     // ... filter to delete one Show
     *   }
     * })
     * 
     */
    delete<T extends ShowDeleteArgs>(args: SelectSubset<T, ShowDeleteArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Show.
     * @param {ShowUpdateArgs} args - Arguments to update one Show.
     * @example
     * // Update one Show
     * const show = await prisma.show.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowUpdateArgs>(args: SelectSubset<T, ShowUpdateArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shows.
     * @param {ShowDeleteManyArgs} args - Arguments to filter Shows to delete.
     * @example
     * // Delete a few Shows
     * const { count } = await prisma.show.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowDeleteManyArgs>(args?: SelectSubset<T, ShowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shows
     * const show = await prisma.show.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowUpdateManyArgs>(args: SelectSubset<T, ShowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Show.
     * @param {ShowUpsertArgs} args - Arguments to update or create a Show.
     * @example
     * // Update or create a Show
     * const show = await prisma.show.upsert({
     *   create: {
     *     // ... data to create a Show
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Show we want to update
     *   }
     * })
     */
    upsert<T extends ShowUpsertArgs>(args: SelectSubset<T, ShowUpsertArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCountArgs} args - Arguments to filter Shows to count.
     * @example
     * // Count the number of Shows
     * const count = await prisma.show.count({
     *   where: {
     *     // ... the filter for the Shows we want to count
     *   }
     * })
    **/
    count<T extends ShowCountArgs>(
      args?: Subset<T, ShowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShowAggregateArgs>(args: Subset<T, ShowAggregateArgs>): Prisma.PrismaPromise<GetShowAggregateType<T>>

    /**
     * Group by Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGroupByArgs} args - Group by arguments.
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
      T extends ShowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowGroupByArgs['orderBy'] }
        : { orderBy?: ShowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Show model
   */
  readonly fields: ShowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Show.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends Show$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Show$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seats<T extends Show$seatsArgs<ExtArgs> = {}>(args?: Subset<T, Show$seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    theatre<T extends theatreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, theatreDefaultArgs<ExtArgs>>): Prisma__theatreClient<$Result.GetResult<Prisma.$theatrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    screens<T extends ScreenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScreenDefaultArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Show model
   */
  interface ShowFieldRefs {
    readonly Show_Id: FieldRef<"Show", 'Int'>
    readonly Movie_Id: FieldRef<"Show", 'Int'>
    readonly Theatre_Id: FieldRef<"Show", 'Int'>
    readonly Screen_no: FieldRef<"Show", 'Int'>
    readonly Show_date: FieldRef<"Show", 'DateTime'>
    readonly Start_time: FieldRef<"Show", 'DateTime'>
    readonly Show_dimension: FieldRef<"Show", 'shows_Show_dimension'>
  }
    

  // Custom InputTypes
  /**
   * Show findUnique
   */
  export type ShowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show findUniqueOrThrow
   */
  export type ShowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show findFirst
   */
  export type ShowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Show findFirstOrThrow
   */
  export type ShowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Show to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Show findMany
   */
  export type ShowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shows.
     */
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * Show create
   */
  export type ShowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The data needed to create a Show.
     */
    data: XOR<ShowCreateInput, ShowUncheckedCreateInput>
  }

  /**
   * Show createMany
   */
  export type ShowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shows.
     */
    data: ShowCreateManyInput | ShowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Show update
   */
  export type ShowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The data needed to update a Show.
     */
    data: XOR<ShowUpdateInput, ShowUncheckedUpdateInput>
    /**
     * Choose, which Show to update.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show updateMany
   */
  export type ShowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shows.
     */
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyInput>
    /**
     * Filter which Shows to update
     */
    where?: ShowWhereInput
    /**
     * Limit how many Shows to update.
     */
    limit?: number
  }

  /**
   * Show upsert
   */
  export type ShowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * The filter to search for the Show to update in case it exists.
     */
    where: ShowWhereUniqueInput
    /**
     * In case the Show found by the `where` argument doesn't exist, create a new Show with this data.
     */
    create: XOR<ShowCreateInput, ShowUncheckedCreateInput>
    /**
     * In case the Show was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowUpdateInput, ShowUncheckedUpdateInput>
  }

  /**
   * Show delete
   */
  export type ShowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    /**
     * Filter which Show to delete.
     */
    where: ShowWhereUniqueInput
  }

  /**
   * Show deleteMany
   */
  export type ShowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shows to delete
     */
    where?: ShowWhereInput
    /**
     * Limit how many Shows to delete.
     */
    limit?: number
  }

  /**
   * Show.booking
   */
  export type Show$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Show.seats
   */
  export type Show$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    cursor?: SeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Show without action
   */
  export type ShowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
  }


  /**
   * Model Seat
   */

  export type AggregateSeat = {
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  export type SeatAvgAggregateOutputType = {
    seat_id: number | null
    show_id: number | null
  }

  export type SeatSumAggregateOutputType = {
    seat_id: number | null
    show_id: number | null
  }

  export type SeatMinAggregateOutputType = {
    seat_id: number | null
    show_id: number | null
    seat_name: string | null
    seat_type: string | null
    status: $Enums.seats_status | null
  }

  export type SeatMaxAggregateOutputType = {
    seat_id: number | null
    show_id: number | null
    seat_name: string | null
    seat_type: string | null
    status: $Enums.seats_status | null
  }

  export type SeatCountAggregateOutputType = {
    seat_id: number
    show_id: number
    seat_name: number
    seat_type: number
    status: number
    _all: number
  }


  export type SeatAvgAggregateInputType = {
    seat_id?: true
    show_id?: true
  }

  export type SeatSumAggregateInputType = {
    seat_id?: true
    show_id?: true
  }

  export type SeatMinAggregateInputType = {
    seat_id?: true
    show_id?: true
    seat_name?: true
    seat_type?: true
    status?: true
  }

  export type SeatMaxAggregateInputType = {
    seat_id?: true
    show_id?: true
    seat_name?: true
    seat_type?: true
    status?: true
  }

  export type SeatCountAggregateInputType = {
    seat_id?: true
    show_id?: true
    seat_name?: true
    seat_type?: true
    status?: true
    _all?: true
  }

  export type SeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seat to aggregate.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seats
    **/
    _count?: true | SeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatMaxAggregateInputType
  }

  export type GetSeatAggregateType<T extends SeatAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat[P]>
      : GetScalarType<T[P], AggregateSeat[P]>
  }




  export type SeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithAggregationInput | SeatOrderByWithAggregationInput[]
    by: SeatScalarFieldEnum[] | SeatScalarFieldEnum
    having?: SeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatCountAggregateInputType | true
    _avg?: SeatAvgAggregateInputType
    _sum?: SeatSumAggregateInputType
    _min?: SeatMinAggregateInputType
    _max?: SeatMaxAggregateInputType
  }

  export type SeatGroupByOutputType = {
    seat_id: number
    show_id: number
    seat_name: string
    seat_type: string | null
    status: $Enums.seats_status | null
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  type GetSeatGroupByPayload<T extends SeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatGroupByOutputType[P]>
            : GetScalarType<T[P], SeatGroupByOutputType[P]>
        }
      >
    >


  export type SeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seat_id?: boolean
    show_id?: boolean
    seat_name?: boolean
    seat_type?: boolean
    status?: boolean
    booking_seats?: boolean | Seat$booking_seatsArgs<ExtArgs>
    shows?: boolean | ShowDefaultArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>



  export type SeatSelectScalar = {
    seat_id?: boolean
    show_id?: boolean
    seat_name?: boolean
    seat_type?: boolean
    status?: boolean
  }

  export type SeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"seat_id" | "show_id" | "seat_name" | "seat_type" | "status", ExtArgs["result"]["seat"]>
  export type SeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_seats?: boolean | Seat$booking_seatsArgs<ExtArgs>
    shows?: boolean | ShowDefaultArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seat"
    objects: {
      booking_seats: Prisma.$booking_seatsPayload<ExtArgs>[]
      shows: Prisma.$ShowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      seat_id: number
      show_id: number
      seat_name: string
      seat_type: string | null
      status: $Enums.seats_status | null
    }, ExtArgs["result"]["seat"]>
    composites: {}
  }

  type SeatGetPayload<S extends boolean | null | undefined | SeatDefaultArgs> = $Result.GetResult<Prisma.$SeatPayload, S>

  type SeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeatCountAggregateInputType | true
    }

  export interface SeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seat'], meta: { name: 'Seat' } }
    /**
     * Find zero or one Seat that matches the filter.
     * @param {SeatFindUniqueArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeatFindUniqueArgs>(args: SelectSubset<T, SeatFindUniqueArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeatFindUniqueOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeatFindUniqueOrThrowArgs>(args: SelectSubset<T, SeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeatFindFirstArgs>(args?: SelectSubset<T, SeatFindFirstArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeatFindFirstOrThrowArgs>(args?: SelectSubset<T, SeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seats
     * const seats = await prisma.seat.findMany()
     * 
     * // Get first 10 Seats
     * const seats = await prisma.seat.findMany({ take: 10 })
     * 
     * // Only select the `seat_id`
     * const seatWithSeat_idOnly = await prisma.seat.findMany({ select: { seat_id: true } })
     * 
     */
    findMany<T extends SeatFindManyArgs>(args?: SelectSubset<T, SeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seat.
     * @param {SeatCreateArgs} args - Arguments to create a Seat.
     * @example
     * // Create one Seat
     * const Seat = await prisma.seat.create({
     *   data: {
     *     // ... data to create a Seat
     *   }
     * })
     * 
     */
    create<T extends SeatCreateArgs>(args: SelectSubset<T, SeatCreateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seats.
     * @param {SeatCreateManyArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeatCreateManyArgs>(args?: SelectSubset<T, SeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seat.
     * @param {SeatDeleteArgs} args - Arguments to delete one Seat.
     * @example
     * // Delete one Seat
     * const Seat = await prisma.seat.delete({
     *   where: {
     *     // ... filter to delete one Seat
     *   }
     * })
     * 
     */
    delete<T extends SeatDeleteArgs>(args: SelectSubset<T, SeatDeleteArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seat.
     * @param {SeatUpdateArgs} args - Arguments to update one Seat.
     * @example
     * // Update one Seat
     * const seat = await prisma.seat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeatUpdateArgs>(args: SelectSubset<T, SeatUpdateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seats.
     * @param {SeatDeleteManyArgs} args - Arguments to filter Seats to delete.
     * @example
     * // Delete a few Seats
     * const { count } = await prisma.seat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeatDeleteManyArgs>(args?: SelectSubset<T, SeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seats
     * const seat = await prisma.seat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeatUpdateManyArgs>(args: SelectSubset<T, SeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seat.
     * @param {SeatUpsertArgs} args - Arguments to update or create a Seat.
     * @example
     * // Update or create a Seat
     * const seat = await prisma.seat.upsert({
     *   create: {
     *     // ... data to create a Seat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat we want to update
     *   }
     * })
     */
    upsert<T extends SeatUpsertArgs>(args: SelectSubset<T, SeatUpsertArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatCountArgs} args - Arguments to filter Seats to count.
     * @example
     * // Count the number of Seats
     * const count = await prisma.seat.count({
     *   where: {
     *     // ... the filter for the Seats we want to count
     *   }
     * })
    **/
    count<T extends SeatCountArgs>(
      args?: Subset<T, SeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeatAggregateArgs>(args: Subset<T, SeatAggregateArgs>): Prisma.PrismaPromise<GetSeatAggregateType<T>>

    /**
     * Group by Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatGroupByArgs} args - Group by arguments.
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
      T extends SeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatGroupByArgs['orderBy'] }
        : { orderBy?: SeatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seat model
   */
  readonly fields: SeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking_seats<T extends Seat$booking_seatsArgs<ExtArgs> = {}>(args?: Subset<T, Seat$booking_seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booking_seatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shows<T extends ShowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowDefaultArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Seat model
   */
  interface SeatFieldRefs {
    readonly seat_id: FieldRef<"Seat", 'Int'>
    readonly show_id: FieldRef<"Seat", 'Int'>
    readonly seat_name: FieldRef<"Seat", 'String'>
    readonly seat_type: FieldRef<"Seat", 'String'>
    readonly status: FieldRef<"Seat", 'seats_status'>
  }
    

  // Custom InputTypes
  /**
   * Seat findUnique
   */
  export type SeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findUniqueOrThrow
   */
  export type SeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findFirst
   */
  export type SeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findFirstOrThrow
   */
  export type SeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findMany
   */
  export type SeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seats to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat create
   */
  export type SeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to create a Seat.
     */
    data: XOR<SeatCreateInput, SeatUncheckedCreateInput>
  }

  /**
   * Seat createMany
   */
  export type SeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seats.
     */
    data: SeatCreateManyInput | SeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seat update
   */
  export type SeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to update a Seat.
     */
    data: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
    /**
     * Choose, which Seat to update.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat updateMany
   */
  export type SeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seats.
     */
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyInput>
    /**
     * Filter which Seats to update
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to update.
     */
    limit?: number
  }

  /**
   * Seat upsert
   */
  export type SeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The filter to search for the Seat to update in case it exists.
     */
    where: SeatWhereUniqueInput
    /**
     * In case the Seat found by the `where` argument doesn't exist, create a new Seat with this data.
     */
    create: XOR<SeatCreateInput, SeatUncheckedCreateInput>
    /**
     * In case the Seat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
  }

  /**
   * Seat delete
   */
  export type SeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter which Seat to delete.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat deleteMany
   */
  export type SeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seats to delete
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to delete.
     */
    limit?: number
  }

  /**
   * Seat.booking_seats
   */
  export type Seat$booking_seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_seats
     */
    select?: booking_seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_seats
     */
    omit?: booking_seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking_seatsInclude<ExtArgs> | null
    where?: booking_seatsWhereInput
    orderBy?: booking_seatsOrderByWithRelationInput | booking_seatsOrderByWithRelationInput[]
    cursor?: booking_seatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Booking_seatsScalarFieldEnum | Booking_seatsScalarFieldEnum[]
  }

  /**
   * Seat without action
   */
  export type SeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    Review_Id: number | null
    movie_Id: number | null
    Rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    Review_Id: number | null
    movie_Id: number | null
    Rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    Review_Id: number | null
    movie_Id: number | null
    Rating: number | null
    Comment: string | null
    Reviewed_At: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    Review_Id: number | null
    movie_Id: number | null
    Rating: number | null
    Comment: string | null
    Reviewed_At: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    Review_Id: number
    movie_Id: number
    Rating: number
    Comment: number
    Reviewed_At: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    Review_Id?: true
    movie_Id?: true
    Rating?: true
  }

  export type ReviewSumAggregateInputType = {
    Review_Id?: true
    movie_Id?: true
    Rating?: true
  }

  export type ReviewMinAggregateInputType = {
    Review_Id?: true
    movie_Id?: true
    Rating?: true
    Comment?: true
    Reviewed_At?: true
  }

  export type ReviewMaxAggregateInputType = {
    Review_Id?: true
    movie_Id?: true
    Rating?: true
    Comment?: true
    Reviewed_At?: true
  }

  export type ReviewCountAggregateInputType = {
    Review_Id?: true
    movie_Id?: true
    Rating?: true
    Comment?: true
    Reviewed_At?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    Review_Id: number
    movie_Id: number | null
    Rating: number | null
    Comment: string | null
    Reviewed_At: Date | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Review_Id?: boolean
    movie_Id?: boolean
    Rating?: boolean
    Comment?: boolean
    Reviewed_At?: boolean
    movies?: boolean | Review$moviesArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    Review_Id?: boolean
    movie_Id?: boolean
    Rating?: boolean
    Comment?: boolean
    Reviewed_At?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Review_Id" | "movie_Id" | "Rating" | "Comment" | "Reviewed_At", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | Review$moviesArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Review_Id: number
      movie_Id: number | null
      Rating: number | null
      Comment: string | null
      Reviewed_At: Date | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `Review_Id`
     * const reviewWithReview_IdOnly = await prisma.review.findMany({ select: { Review_Id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends Review$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Review$moviesArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly Review_Id: FieldRef<"Review", 'Int'>
    readonly movie_Id: FieldRef<"Review", 'Int'>
    readonly Rating: FieldRef<"Review", 'Int'>
    readonly Comment: FieldRef<"Review", 'String'>
    readonly Reviewed_At: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data?: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.movies
   */
  export type Review$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    booking_Id: number | null
    customer_Id: number | null
    show_id: number | null
    Amount: Decimal | null
  }

  export type BookingSumAggregateOutputType = {
    booking_Id: number | null
    customer_Id: number | null
    show_id: number | null
    Amount: Decimal | null
  }

  export type BookingMinAggregateOutputType = {
    booking_Id: number | null
    customer_Id: number | null
    show_id: number | null
    Amount: Decimal | null
    Payment_method: string | null
    Status: string | null
    payment_time: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    booking_Id: number | null
    customer_Id: number | null
    show_id: number | null
    Amount: Decimal | null
    Payment_method: string | null
    Status: string | null
    payment_time: Date | null
  }

  export type BookingCountAggregateOutputType = {
    booking_Id: number
    customer_Id: number
    show_id: number
    Amount: number
    Payment_method: number
    Status: number
    payment_time: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    booking_Id?: true
    customer_Id?: true
    show_id?: true
    Amount?: true
  }

  export type BookingSumAggregateInputType = {
    booking_Id?: true
    customer_Id?: true
    show_id?: true
    Amount?: true
  }

  export type BookingMinAggregateInputType = {
    booking_Id?: true
    customer_Id?: true
    show_id?: true
    Amount?: true
    Payment_method?: true
    Status?: true
    payment_time?: true
  }

  export type BookingMaxAggregateInputType = {
    booking_Id?: true
    customer_Id?: true
    show_id?: true
    Amount?: true
    Payment_method?: true
    Status?: true
    payment_time?: true
  }

  export type BookingCountAggregateInputType = {
    booking_Id?: true
    customer_Id?: true
    show_id?: true
    Amount?: true
    Payment_method?: true
    Status?: true
    payment_time?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: bookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    booking_Id: number
    customer_Id: number | null
    show_id: number | null
    Amount: Decimal
    Payment_method: string | null
    Status: string
    payment_time: Date | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booking_Id?: boolean
    customer_Id?: boolean
    show_id?: boolean
    Amount?: boolean
    Payment_method?: boolean
    Status?: boolean
    payment_time?: boolean
    customer?: boolean | booking$customerArgs<ExtArgs>
    shows?: boolean | booking$showsArgs<ExtArgs>
    booking_seats?: boolean | booking$booking_seatsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type bookingSelectScalar = {
    booking_Id?: boolean
    customer_Id?: boolean
    show_id?: boolean
    Amount?: boolean
    Payment_method?: boolean
    Status?: boolean
    payment_time?: boolean
  }

  export type bookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"booking_Id" | "customer_Id" | "show_id" | "Amount" | "Payment_method" | "Status" | "payment_time", ExtArgs["result"]["booking"]>
  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | booking$customerArgs<ExtArgs>
    shows?: boolean | booking$showsArgs<ExtArgs>
    booking_seats?: boolean | booking$booking_seatsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "booking"
    objects: {
      customer: Prisma.$customerPayload<ExtArgs> | null
      shows: Prisma.$ShowPayload<ExtArgs> | null
      booking_seats: Prisma.$booking_seatsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      booking_Id: number
      customer_Id: number | null
      show_id: number | null
      Amount: Prisma.Decimal
      Payment_method: string | null
      Status: string
      payment_time: Date | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<Prisma.$bookingPayload, S>

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking'], meta: { name: 'booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingFindUniqueArgs>(args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingFindFirstArgs>(args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `booking_Id`
     * const bookingWithBooking_IdOnly = await prisma.booking.findMany({ select: { booking_Id: true } })
     * 
     */
    findMany<T extends bookingFindManyArgs>(args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends bookingCreateArgs>(args: SelectSubset<T, bookingCreateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingCreateManyArgs>(args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends bookingDeleteArgs>(args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingUpdateArgs>(args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingDeleteManyArgs>(args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingUpdateManyArgs>(args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends bookingUpsertArgs>(args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
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
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the booking model
   */
  readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends booking$customerArgs<ExtArgs> = {}>(args?: Subset<T, booking$customerArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shows<T extends booking$showsArgs<ExtArgs> = {}>(args?: Subset<T, booking$showsArgs<ExtArgs>>): Prisma__ShowClient<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    booking_seats<T extends booking$booking_seatsArgs<ExtArgs> = {}>(args?: Subset<T, booking$booking_seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booking_seatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly booking_Id: FieldRef<"booking", 'Int'>
    readonly customer_Id: FieldRef<"booking", 'Int'>
    readonly show_id: FieldRef<"booking", 'Int'>
    readonly Amount: FieldRef<"booking", 'Decimal'>
    readonly Payment_method: FieldRef<"booking", 'String'>
    readonly Status: FieldRef<"booking", 'String'>
    readonly payment_time: FieldRef<"booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>
  }

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
  }

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * booking.customer
   */
  export type booking$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    where?: customerWhereInput
  }

  /**
   * booking.shows
   */
  export type booking$showsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    where?: ShowWhereInput
  }

  /**
   * booking.booking_seats
   */
  export type booking$booking_seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_seats
     */
    select?: booking_seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_seats
     */
    omit?: booking_seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking_seatsInclude<ExtArgs> | null
    where?: booking_seatsWhereInput
    orderBy?: booking_seatsOrderByWithRelationInput | booking_seatsOrderByWithRelationInput[]
    cursor?: booking_seatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Booking_seatsScalarFieldEnum | Booking_seatsScalarFieldEnum[]
  }

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
  }


  /**
   * Model booking_seats
   */

  export type AggregateBooking_seats = {
    _count: Booking_seatsCountAggregateOutputType | null
    _avg: Booking_seatsAvgAggregateOutputType | null
    _sum: Booking_seatsSumAggregateOutputType | null
    _min: Booking_seatsMinAggregateOutputType | null
    _max: Booking_seatsMaxAggregateOutputType | null
  }

  export type Booking_seatsAvgAggregateOutputType = {
    booking_seat_id: number | null
    booking_Id: number | null
    seat_id: number | null
  }

  export type Booking_seatsSumAggregateOutputType = {
    booking_seat_id: number | null
    booking_Id: number | null
    seat_id: number | null
  }

  export type Booking_seatsMinAggregateOutputType = {
    booking_seat_id: number | null
    booking_Id: number | null
    seat_id: number | null
  }

  export type Booking_seatsMaxAggregateOutputType = {
    booking_seat_id: number | null
    booking_Id: number | null
    seat_id: number | null
  }

  export type Booking_seatsCountAggregateOutputType = {
    booking_seat_id: number
    booking_Id: number
    seat_id: number
    _all: number
  }


  export type Booking_seatsAvgAggregateInputType = {
    booking_seat_id?: true
    booking_Id?: true
    seat_id?: true
  }

  export type Booking_seatsSumAggregateInputType = {
    booking_seat_id?: true
    booking_Id?: true
    seat_id?: true
  }

  export type Booking_seatsMinAggregateInputType = {
    booking_seat_id?: true
    booking_Id?: true
    seat_id?: true
  }

  export type Booking_seatsMaxAggregateInputType = {
    booking_seat_id?: true
    booking_Id?: true
    seat_id?: true
  }

  export type Booking_seatsCountAggregateInputType = {
    booking_seat_id?: true
    booking_Id?: true
    seat_id?: true
    _all?: true
  }

  export type Booking_seatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking_seats to aggregate.
     */
    where?: booking_seatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booking_seats to fetch.
     */
    orderBy?: booking_seatsOrderByWithRelationInput | booking_seatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: booking_seatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booking_seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booking_seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned booking_seats
    **/
    _count?: true | Booking_seatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Booking_seatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Booking_seatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Booking_seatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Booking_seatsMaxAggregateInputType
  }

  export type GetBooking_seatsAggregateType<T extends Booking_seatsAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking_seats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking_seats[P]>
      : GetScalarType<T[P], AggregateBooking_seats[P]>
  }




  export type booking_seatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booking_seatsWhereInput
    orderBy?: booking_seatsOrderByWithAggregationInput | booking_seatsOrderByWithAggregationInput[]
    by: Booking_seatsScalarFieldEnum[] | Booking_seatsScalarFieldEnum
    having?: booking_seatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Booking_seatsCountAggregateInputType | true
    _avg?: Booking_seatsAvgAggregateInputType
    _sum?: Booking_seatsSumAggregateInputType
    _min?: Booking_seatsMinAggregateInputType
    _max?: Booking_seatsMaxAggregateInputType
  }

  export type Booking_seatsGroupByOutputType = {
    booking_seat_id: number
    booking_Id: number | null
    seat_id: number | null
    _count: Booking_seatsCountAggregateOutputType | null
    _avg: Booking_seatsAvgAggregateOutputType | null
    _sum: Booking_seatsSumAggregateOutputType | null
    _min: Booking_seatsMinAggregateOutputType | null
    _max: Booking_seatsMaxAggregateOutputType | null
  }

  type GetBooking_seatsGroupByPayload<T extends booking_seatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Booking_seatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Booking_seatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Booking_seatsGroupByOutputType[P]>
            : GetScalarType<T[P], Booking_seatsGroupByOutputType[P]>
        }
      >
    >


  export type booking_seatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booking_seat_id?: boolean
    booking_Id?: boolean
    seat_id?: boolean
    booking?: boolean | booking_seats$bookingArgs<ExtArgs>
    seats?: boolean | booking_seats$seatsArgs<ExtArgs>
  }, ExtArgs["result"]["booking_seats"]>



  export type booking_seatsSelectScalar = {
    booking_seat_id?: boolean
    booking_Id?: boolean
    seat_id?: boolean
  }

  export type booking_seatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"booking_seat_id" | "booking_Id" | "seat_id", ExtArgs["result"]["booking_seats"]>
  export type booking_seatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | booking_seats$bookingArgs<ExtArgs>
    seats?: boolean | booking_seats$seatsArgs<ExtArgs>
  }

  export type $booking_seatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "booking_seats"
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs> | null
      seats: Prisma.$SeatPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      booking_seat_id: number
      booking_Id: number | null
      seat_id: number | null
    }, ExtArgs["result"]["booking_seats"]>
    composites: {}
  }

  type booking_seatsGetPayload<S extends boolean | null | undefined | booking_seatsDefaultArgs> = $Result.GetResult<Prisma.$booking_seatsPayload, S>

  type booking_seatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<booking_seatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Booking_seatsCountAggregateInputType | true
    }

  export interface booking_seatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking_seats'], meta: { name: 'booking_seats' } }
    /**
     * Find zero or one Booking_seats that matches the filter.
     * @param {booking_seatsFindUniqueArgs} args - Arguments to find a Booking_seats
     * @example
     * // Get one Booking_seats
     * const booking_seats = await prisma.booking_seats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends booking_seatsFindUniqueArgs>(args: SelectSubset<T, booking_seatsFindUniqueArgs<ExtArgs>>): Prisma__booking_seatsClient<$Result.GetResult<Prisma.$booking_seatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking_seats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {booking_seatsFindUniqueOrThrowArgs} args - Arguments to find a Booking_seats
     * @example
     * // Get one Booking_seats
     * const booking_seats = await prisma.booking_seats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends booking_seatsFindUniqueOrThrowArgs>(args: SelectSubset<T, booking_seatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__booking_seatsClient<$Result.GetResult<Prisma.$booking_seatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking_seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking_seatsFindFirstArgs} args - Arguments to find a Booking_seats
     * @example
     * // Get one Booking_seats
     * const booking_seats = await prisma.booking_seats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends booking_seatsFindFirstArgs>(args?: SelectSubset<T, booking_seatsFindFirstArgs<ExtArgs>>): Prisma__booking_seatsClient<$Result.GetResult<Prisma.$booking_seatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking_seats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking_seatsFindFirstOrThrowArgs} args - Arguments to find a Booking_seats
     * @example
     * // Get one Booking_seats
     * const booking_seats = await prisma.booking_seats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends booking_seatsFindFirstOrThrowArgs>(args?: SelectSubset<T, booking_seatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__booking_seatsClient<$Result.GetResult<Prisma.$booking_seatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Booking_seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking_seatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Booking_seats
     * const booking_seats = await prisma.booking_seats.findMany()
     * 
     * // Get first 10 Booking_seats
     * const booking_seats = await prisma.booking_seats.findMany({ take: 10 })
     * 
     * // Only select the `booking_seat_id`
     * const booking_seatsWithBooking_seat_idOnly = await prisma.booking_seats.findMany({ select: { booking_seat_id: true } })
     * 
     */
    findMany<T extends booking_seatsFindManyArgs>(args?: SelectSubset<T, booking_seatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booking_seatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking_seats.
     * @param {booking_seatsCreateArgs} args - Arguments to create a Booking_seats.
     * @example
     * // Create one Booking_seats
     * const Booking_seats = await prisma.booking_seats.create({
     *   data: {
     *     // ... data to create a Booking_seats
     *   }
     * })
     * 
     */
    create<T extends booking_seatsCreateArgs>(args: SelectSubset<T, booking_seatsCreateArgs<ExtArgs>>): Prisma__booking_seatsClient<$Result.GetResult<Prisma.$booking_seatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Booking_seats.
     * @param {booking_seatsCreateManyArgs} args - Arguments to create many Booking_seats.
     * @example
     * // Create many Booking_seats
     * const booking_seats = await prisma.booking_seats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends booking_seatsCreateManyArgs>(args?: SelectSubset<T, booking_seatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking_seats.
     * @param {booking_seatsDeleteArgs} args - Arguments to delete one Booking_seats.
     * @example
     * // Delete one Booking_seats
     * const Booking_seats = await prisma.booking_seats.delete({
     *   where: {
     *     // ... filter to delete one Booking_seats
     *   }
     * })
     * 
     */
    delete<T extends booking_seatsDeleteArgs>(args: SelectSubset<T, booking_seatsDeleteArgs<ExtArgs>>): Prisma__booking_seatsClient<$Result.GetResult<Prisma.$booking_seatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking_seats.
     * @param {booking_seatsUpdateArgs} args - Arguments to update one Booking_seats.
     * @example
     * // Update one Booking_seats
     * const booking_seats = await prisma.booking_seats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends booking_seatsUpdateArgs>(args: SelectSubset<T, booking_seatsUpdateArgs<ExtArgs>>): Prisma__booking_seatsClient<$Result.GetResult<Prisma.$booking_seatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Booking_seats.
     * @param {booking_seatsDeleteManyArgs} args - Arguments to filter Booking_seats to delete.
     * @example
     * // Delete a few Booking_seats
     * const { count } = await prisma.booking_seats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends booking_seatsDeleteManyArgs>(args?: SelectSubset<T, booking_seatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Booking_seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking_seatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Booking_seats
     * const booking_seats = await prisma.booking_seats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends booking_seatsUpdateManyArgs>(args: SelectSubset<T, booking_seatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking_seats.
     * @param {booking_seatsUpsertArgs} args - Arguments to update or create a Booking_seats.
     * @example
     * // Update or create a Booking_seats
     * const booking_seats = await prisma.booking_seats.upsert({
     *   create: {
     *     // ... data to create a Booking_seats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking_seats we want to update
     *   }
     * })
     */
    upsert<T extends booking_seatsUpsertArgs>(args: SelectSubset<T, booking_seatsUpsertArgs<ExtArgs>>): Prisma__booking_seatsClient<$Result.GetResult<Prisma.$booking_seatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Booking_seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking_seatsCountArgs} args - Arguments to filter Booking_seats to count.
     * @example
     * // Count the number of Booking_seats
     * const count = await prisma.booking_seats.count({
     *   where: {
     *     // ... the filter for the Booking_seats we want to count
     *   }
     * })
    **/
    count<T extends booking_seatsCountArgs>(
      args?: Subset<T, booking_seatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Booking_seatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking_seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Booking_seatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Booking_seatsAggregateArgs>(args: Subset<T, Booking_seatsAggregateArgs>): Prisma.PrismaPromise<GetBooking_seatsAggregateType<T>>

    /**
     * Group by Booking_seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking_seatsGroupByArgs} args - Group by arguments.
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
      T extends booking_seatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: booking_seatsGroupByArgs['orderBy'] }
        : { orderBy?: booking_seatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, booking_seatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooking_seatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the booking_seats model
   */
  readonly fields: booking_seatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking_seats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__booking_seatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends booking_seats$bookingArgs<ExtArgs> = {}>(args?: Subset<T, booking_seats$bookingArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    seats<T extends booking_seats$seatsArgs<ExtArgs> = {}>(args?: Subset<T, booking_seats$seatsArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the booking_seats model
   */
  interface booking_seatsFieldRefs {
    readonly booking_seat_id: FieldRef<"booking_seats", 'Int'>
    readonly booking_Id: FieldRef<"booking_seats", 'Int'>
    readonly seat_id: FieldRef<"booking_seats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * booking_seats findUnique
   */
  export type booking_seatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_seats
     */
    select?: booking_seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_seats
     */
    omit?: booking_seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking_seatsInclude<ExtArgs> | null
    /**
     * Filter, which booking_seats to fetch.
     */
    where: booking_seatsWhereUniqueInput
  }

  /**
   * booking_seats findUniqueOrThrow
   */
  export type booking_seatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_seats
     */
    select?: booking_seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_seats
     */
    omit?: booking_seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking_seatsInclude<ExtArgs> | null
    /**
     * Filter, which booking_seats to fetch.
     */
    where: booking_seatsWhereUniqueInput
  }

  /**
   * booking_seats findFirst
   */
  export type booking_seatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_seats
     */
    select?: booking_seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_seats
     */
    omit?: booking_seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking_seatsInclude<ExtArgs> | null
    /**
     * Filter, which booking_seats to fetch.
     */
    where?: booking_seatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booking_seats to fetch.
     */
    orderBy?: booking_seatsOrderByWithRelationInput | booking_seatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for booking_seats.
     */
    cursor?: booking_seatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booking_seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booking_seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of booking_seats.
     */
    distinct?: Booking_seatsScalarFieldEnum | Booking_seatsScalarFieldEnum[]
  }

  /**
   * booking_seats findFirstOrThrow
   */
  export type booking_seatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_seats
     */
    select?: booking_seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_seats
     */
    omit?: booking_seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking_seatsInclude<ExtArgs> | null
    /**
     * Filter, which booking_seats to fetch.
     */
    where?: booking_seatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booking_seats to fetch.
     */
    orderBy?: booking_seatsOrderByWithRelationInput | booking_seatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for booking_seats.
     */
    cursor?: booking_seatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booking_seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booking_seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of booking_seats.
     */
    distinct?: Booking_seatsScalarFieldEnum | Booking_seatsScalarFieldEnum[]
  }

  /**
   * booking_seats findMany
   */
  export type booking_seatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_seats
     */
    select?: booking_seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_seats
     */
    omit?: booking_seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking_seatsInclude<ExtArgs> | null
    /**
     * Filter, which booking_seats to fetch.
     */
    where?: booking_seatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booking_seats to fetch.
     */
    orderBy?: booking_seatsOrderByWithRelationInput | booking_seatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing booking_seats.
     */
    cursor?: booking_seatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booking_seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booking_seats.
     */
    skip?: number
    distinct?: Booking_seatsScalarFieldEnum | Booking_seatsScalarFieldEnum[]
  }

  /**
   * booking_seats create
   */
  export type booking_seatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_seats
     */
    select?: booking_seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_seats
     */
    omit?: booking_seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking_seatsInclude<ExtArgs> | null
    /**
     * The data needed to create a booking_seats.
     */
    data?: XOR<booking_seatsCreateInput, booking_seatsUncheckedCreateInput>
  }

  /**
   * booking_seats createMany
   */
  export type booking_seatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many booking_seats.
     */
    data: booking_seatsCreateManyInput | booking_seatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * booking_seats update
   */
  export type booking_seatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_seats
     */
    select?: booking_seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_seats
     */
    omit?: booking_seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking_seatsInclude<ExtArgs> | null
    /**
     * The data needed to update a booking_seats.
     */
    data: XOR<booking_seatsUpdateInput, booking_seatsUncheckedUpdateInput>
    /**
     * Choose, which booking_seats to update.
     */
    where: booking_seatsWhereUniqueInput
  }

  /**
   * booking_seats updateMany
   */
  export type booking_seatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update booking_seats.
     */
    data: XOR<booking_seatsUpdateManyMutationInput, booking_seatsUncheckedUpdateManyInput>
    /**
     * Filter which booking_seats to update
     */
    where?: booking_seatsWhereInput
    /**
     * Limit how many booking_seats to update.
     */
    limit?: number
  }

  /**
   * booking_seats upsert
   */
  export type booking_seatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_seats
     */
    select?: booking_seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_seats
     */
    omit?: booking_seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking_seatsInclude<ExtArgs> | null
    /**
     * The filter to search for the booking_seats to update in case it exists.
     */
    where: booking_seatsWhereUniqueInput
    /**
     * In case the booking_seats found by the `where` argument doesn't exist, create a new booking_seats with this data.
     */
    create: XOR<booking_seatsCreateInput, booking_seatsUncheckedCreateInput>
    /**
     * In case the booking_seats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<booking_seatsUpdateInput, booking_seatsUncheckedUpdateInput>
  }

  /**
   * booking_seats delete
   */
  export type booking_seatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_seats
     */
    select?: booking_seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_seats
     */
    omit?: booking_seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking_seatsInclude<ExtArgs> | null
    /**
     * Filter which booking_seats to delete.
     */
    where: booking_seatsWhereUniqueInput
  }

  /**
   * booking_seats deleteMany
   */
  export type booking_seatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking_seats to delete
     */
    where?: booking_seatsWhereInput
    /**
     * Limit how many booking_seats to delete.
     */
    limit?: number
  }

  /**
   * booking_seats.booking
   */
  export type booking_seats$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
  }

  /**
   * booking_seats.seats
   */
  export type booking_seats$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    where?: SeatWhereInput
  }

  /**
   * booking_seats without action
   */
  export type booking_seatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_seats
     */
    select?: booking_seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_seats
     */
    omit?: booking_seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking_seatsInclude<ExtArgs> | null
  }


  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customer_Id: number | null
    Phone_No: number | null
  }

  export type CustomerSumAggregateOutputType = {
    customer_Id: number | null
    Phone_No: bigint | null
  }

  export type CustomerMinAggregateOutputType = {
    customer_Id: number | null
    F_Name: string | null
    L_Name: string | null
    Email: string | null
    Phone_No: bigint | null
    Password: string | null
    Created_at: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    customer_Id: number | null
    F_Name: string | null
    L_Name: string | null
    Email: string | null
    Phone_No: bigint | null
    Password: string | null
    Created_at: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    customer_Id: number
    F_Name: number
    L_Name: number
    Email: number
    Phone_No: number
    Password: number
    Created_at: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customer_Id?: true
    Phone_No?: true
  }

  export type CustomerSumAggregateInputType = {
    customer_Id?: true
    Phone_No?: true
  }

  export type CustomerMinAggregateInputType = {
    customer_Id?: true
    F_Name?: true
    L_Name?: true
    Email?: true
    Phone_No?: true
    Password?: true
    Created_at?: true
  }

  export type CustomerMaxAggregateInputType = {
    customer_Id?: true
    F_Name?: true
    L_Name?: true
    Email?: true
    Phone_No?: true
    Password?: true
    Created_at?: true
  }

  export type CustomerCountAggregateInputType = {
    customer_Id?: true
    F_Name?: true
    L_Name?: true
    Email?: true
    Phone_No?: true
    Password?: true
    Created_at?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customer_Id: number
    F_Name: string
    L_Name: string
    Email: string
    Phone_No: bigint
    Password: string
    Created_at: Date | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_Id?: boolean
    F_Name?: boolean
    L_Name?: boolean
    Email?: boolean
    Phone_No?: boolean
    Password?: boolean
    Created_at?: boolean
    booking?: boolean | customer$bookingArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type customerSelectScalar = {
    customer_Id?: boolean
    F_Name?: boolean
    L_Name?: boolean
    Email?: boolean
    Phone_No?: boolean
    Password?: boolean
    Created_at?: boolean
  }

  export type customerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customer_Id" | "F_Name" | "L_Name" | "Email" | "Phone_No" | "Password" | "Created_at", ExtArgs["result"]["customer"]>
  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | customer$bookingArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer"
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customer_Id: number
      F_Name: string
      L_Name: string
      Email: string
      Phone_No: bigint
      Password: string
      Created_at: Date | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<Prisma.$customerPayload, S>

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer'], meta: { name: 'customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customerFindUniqueArgs>(args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customerFindFirstArgs>(args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customer_Id`
     * const customerWithCustomer_IdOnly = await prisma.customer.findMany({ select: { customer_Id: true } })
     * 
     */
    findMany<T extends customerFindManyArgs>(args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends customerCreateArgs>(args: SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customerCreateManyArgs>(args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends customerDeleteArgs>(args: SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customerUpdateArgs>(args: SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customerDeleteManyArgs>(args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customerUpdateManyArgs>(args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends customerUpsertArgs>(args: SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
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
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer model
   */
  readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends customer$bookingArgs<ExtArgs> = {}>(args?: Subset<T, customer$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly customer_Id: FieldRef<"customer", 'Int'>
    readonly F_Name: FieldRef<"customer", 'String'>
    readonly L_Name: FieldRef<"customer", 'String'>
    readonly Email: FieldRef<"customer", 'String'>
    readonly Phone_No: FieldRef<"customer", 'BigInt'>
    readonly Password: FieldRef<"customer", 'String'>
    readonly Created_at: FieldRef<"customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>
  }

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>
  }

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customer.booking
   */
  export type customer$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
  }


  /**
   * Model theatre
   */

  export type AggregateTheatre = {
    _count: TheatreCountAggregateOutputType | null
    _avg: TheatreAvgAggregateOutputType | null
    _sum: TheatreSumAggregateOutputType | null
    _min: TheatreMinAggregateOutputType | null
    _max: TheatreMaxAggregateOutputType | null
  }

  export type TheatreAvgAggregateOutputType = {
    theatre_Id: number | null
    Total_no_of_screens: number | null
  }

  export type TheatreSumAggregateOutputType = {
    theatre_Id: number | null
    Total_no_of_screens: number | null
  }

  export type TheatreMinAggregateOutputType = {
    theatre_Id: number | null
    Name: string | null
    Total_no_of_screens: number | null
    Address_Pincode: string | null
    Address_City: string | null
    Address_Area: string | null
    Address_Landmark: string | null
    Address_BuildingNo: string | null
  }

  export type TheatreMaxAggregateOutputType = {
    theatre_Id: number | null
    Name: string | null
    Total_no_of_screens: number | null
    Address_Pincode: string | null
    Address_City: string | null
    Address_Area: string | null
    Address_Landmark: string | null
    Address_BuildingNo: string | null
  }

  export type TheatreCountAggregateOutputType = {
    theatre_Id: number
    Name: number
    Total_no_of_screens: number
    Address_Pincode: number
    Address_City: number
    Address_Area: number
    Address_Landmark: number
    Address_BuildingNo: number
    _all: number
  }


  export type TheatreAvgAggregateInputType = {
    theatre_Id?: true
    Total_no_of_screens?: true
  }

  export type TheatreSumAggregateInputType = {
    theatre_Id?: true
    Total_no_of_screens?: true
  }

  export type TheatreMinAggregateInputType = {
    theatre_Id?: true
    Name?: true
    Total_no_of_screens?: true
    Address_Pincode?: true
    Address_City?: true
    Address_Area?: true
    Address_Landmark?: true
    Address_BuildingNo?: true
  }

  export type TheatreMaxAggregateInputType = {
    theatre_Id?: true
    Name?: true
    Total_no_of_screens?: true
    Address_Pincode?: true
    Address_City?: true
    Address_Area?: true
    Address_Landmark?: true
    Address_BuildingNo?: true
  }

  export type TheatreCountAggregateInputType = {
    theatre_Id?: true
    Name?: true
    Total_no_of_screens?: true
    Address_Pincode?: true
    Address_City?: true
    Address_Area?: true
    Address_Landmark?: true
    Address_BuildingNo?: true
    _all?: true
  }

  export type TheatreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which theatre to aggregate.
     */
    where?: theatreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of theatres to fetch.
     */
    orderBy?: theatreOrderByWithRelationInput | theatreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: theatreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` theatres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` theatres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned theatres
    **/
    _count?: true | TheatreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TheatreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TheatreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TheatreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TheatreMaxAggregateInputType
  }

  export type GetTheatreAggregateType<T extends TheatreAggregateArgs> = {
        [P in keyof T & keyof AggregateTheatre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheatre[P]>
      : GetScalarType<T[P], AggregateTheatre[P]>
  }




  export type theatreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: theatreWhereInput
    orderBy?: theatreOrderByWithAggregationInput | theatreOrderByWithAggregationInput[]
    by: TheatreScalarFieldEnum[] | TheatreScalarFieldEnum
    having?: theatreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TheatreCountAggregateInputType | true
    _avg?: TheatreAvgAggregateInputType
    _sum?: TheatreSumAggregateInputType
    _min?: TheatreMinAggregateInputType
    _max?: TheatreMaxAggregateInputType
  }

  export type TheatreGroupByOutputType = {
    theatre_Id: number
    Name: string | null
    Total_no_of_screens: number | null
    Address_Pincode: string | null
    Address_City: string | null
    Address_Area: string | null
    Address_Landmark: string | null
    Address_BuildingNo: string | null
    _count: TheatreCountAggregateOutputType | null
    _avg: TheatreAvgAggregateOutputType | null
    _sum: TheatreSumAggregateOutputType | null
    _min: TheatreMinAggregateOutputType | null
    _max: TheatreMaxAggregateOutputType | null
  }

  type GetTheatreGroupByPayload<T extends theatreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TheatreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TheatreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TheatreGroupByOutputType[P]>
            : GetScalarType<T[P], TheatreGroupByOutputType[P]>
        }
      >
    >


  export type theatreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    theatre_Id?: boolean
    Name?: boolean
    Total_no_of_screens?: boolean
    Address_Pincode?: boolean
    Address_City?: boolean
    Address_Area?: boolean
    Address_Landmark?: boolean
    Address_BuildingNo?: boolean
    screens?: boolean | theatre$screensArgs<ExtArgs>
    shows?: boolean | theatre$showsArgs<ExtArgs>
    _count?: boolean | TheatreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theatre"]>



  export type theatreSelectScalar = {
    theatre_Id?: boolean
    Name?: boolean
    Total_no_of_screens?: boolean
    Address_Pincode?: boolean
    Address_City?: boolean
    Address_Area?: boolean
    Address_Landmark?: boolean
    Address_BuildingNo?: boolean
  }

  export type theatreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"theatre_Id" | "Name" | "Total_no_of_screens" | "Address_Pincode" | "Address_City" | "Address_Area" | "Address_Landmark" | "Address_BuildingNo", ExtArgs["result"]["theatre"]>
  export type theatreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screens?: boolean | theatre$screensArgs<ExtArgs>
    shows?: boolean | theatre$showsArgs<ExtArgs>
    _count?: boolean | TheatreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $theatrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "theatre"
    objects: {
      screens: Prisma.$ScreenPayload<ExtArgs>[]
      shows: Prisma.$ShowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      theatre_Id: number
      Name: string | null
      Total_no_of_screens: number | null
      Address_Pincode: string | null
      Address_City: string | null
      Address_Area: string | null
      Address_Landmark: string | null
      Address_BuildingNo: string | null
    }, ExtArgs["result"]["theatre"]>
    composites: {}
  }

  type theatreGetPayload<S extends boolean | null | undefined | theatreDefaultArgs> = $Result.GetResult<Prisma.$theatrePayload, S>

  type theatreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<theatreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TheatreCountAggregateInputType | true
    }

  export interface theatreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['theatre'], meta: { name: 'theatre' } }
    /**
     * Find zero or one Theatre that matches the filter.
     * @param {theatreFindUniqueArgs} args - Arguments to find a Theatre
     * @example
     * // Get one Theatre
     * const theatre = await prisma.theatre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends theatreFindUniqueArgs>(args: SelectSubset<T, theatreFindUniqueArgs<ExtArgs>>): Prisma__theatreClient<$Result.GetResult<Prisma.$theatrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theatre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {theatreFindUniqueOrThrowArgs} args - Arguments to find a Theatre
     * @example
     * // Get one Theatre
     * const theatre = await prisma.theatre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends theatreFindUniqueOrThrowArgs>(args: SelectSubset<T, theatreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__theatreClient<$Result.GetResult<Prisma.$theatrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theatre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {theatreFindFirstArgs} args - Arguments to find a Theatre
     * @example
     * // Get one Theatre
     * const theatre = await prisma.theatre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends theatreFindFirstArgs>(args?: SelectSubset<T, theatreFindFirstArgs<ExtArgs>>): Prisma__theatreClient<$Result.GetResult<Prisma.$theatrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theatre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {theatreFindFirstOrThrowArgs} args - Arguments to find a Theatre
     * @example
     * // Get one Theatre
     * const theatre = await prisma.theatre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends theatreFindFirstOrThrowArgs>(args?: SelectSubset<T, theatreFindFirstOrThrowArgs<ExtArgs>>): Prisma__theatreClient<$Result.GetResult<Prisma.$theatrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Theatres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {theatreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Theatres
     * const theatres = await prisma.theatre.findMany()
     * 
     * // Get first 10 Theatres
     * const theatres = await prisma.theatre.findMany({ take: 10 })
     * 
     * // Only select the `theatre_Id`
     * const theatreWithTheatre_IdOnly = await prisma.theatre.findMany({ select: { theatre_Id: true } })
     * 
     */
    findMany<T extends theatreFindManyArgs>(args?: SelectSubset<T, theatreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$theatrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theatre.
     * @param {theatreCreateArgs} args - Arguments to create a Theatre.
     * @example
     * // Create one Theatre
     * const Theatre = await prisma.theatre.create({
     *   data: {
     *     // ... data to create a Theatre
     *   }
     * })
     * 
     */
    create<T extends theatreCreateArgs>(args: SelectSubset<T, theatreCreateArgs<ExtArgs>>): Prisma__theatreClient<$Result.GetResult<Prisma.$theatrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Theatres.
     * @param {theatreCreateManyArgs} args - Arguments to create many Theatres.
     * @example
     * // Create many Theatres
     * const theatre = await prisma.theatre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends theatreCreateManyArgs>(args?: SelectSubset<T, theatreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Theatre.
     * @param {theatreDeleteArgs} args - Arguments to delete one Theatre.
     * @example
     * // Delete one Theatre
     * const Theatre = await prisma.theatre.delete({
     *   where: {
     *     // ... filter to delete one Theatre
     *   }
     * })
     * 
     */
    delete<T extends theatreDeleteArgs>(args: SelectSubset<T, theatreDeleteArgs<ExtArgs>>): Prisma__theatreClient<$Result.GetResult<Prisma.$theatrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theatre.
     * @param {theatreUpdateArgs} args - Arguments to update one Theatre.
     * @example
     * // Update one Theatre
     * const theatre = await prisma.theatre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends theatreUpdateArgs>(args: SelectSubset<T, theatreUpdateArgs<ExtArgs>>): Prisma__theatreClient<$Result.GetResult<Prisma.$theatrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Theatres.
     * @param {theatreDeleteManyArgs} args - Arguments to filter Theatres to delete.
     * @example
     * // Delete a few Theatres
     * const { count } = await prisma.theatre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends theatreDeleteManyArgs>(args?: SelectSubset<T, theatreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Theatres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {theatreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Theatres
     * const theatre = await prisma.theatre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends theatreUpdateManyArgs>(args: SelectSubset<T, theatreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Theatre.
     * @param {theatreUpsertArgs} args - Arguments to update or create a Theatre.
     * @example
     * // Update or create a Theatre
     * const theatre = await prisma.theatre.upsert({
     *   create: {
     *     // ... data to create a Theatre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theatre we want to update
     *   }
     * })
     */
    upsert<T extends theatreUpsertArgs>(args: SelectSubset<T, theatreUpsertArgs<ExtArgs>>): Prisma__theatreClient<$Result.GetResult<Prisma.$theatrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Theatres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {theatreCountArgs} args - Arguments to filter Theatres to count.
     * @example
     * // Count the number of Theatres
     * const count = await prisma.theatre.count({
     *   where: {
     *     // ... the filter for the Theatres we want to count
     *   }
     * })
    **/
    count<T extends theatreCountArgs>(
      args?: Subset<T, theatreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TheatreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theatre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheatreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TheatreAggregateArgs>(args: Subset<T, TheatreAggregateArgs>): Prisma.PrismaPromise<GetTheatreAggregateType<T>>

    /**
     * Group by Theatre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {theatreGroupByArgs} args - Group by arguments.
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
      T extends theatreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: theatreGroupByArgs['orderBy'] }
        : { orderBy?: theatreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, theatreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTheatreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the theatre model
   */
  readonly fields: theatreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for theatre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__theatreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    screens<T extends theatre$screensArgs<ExtArgs> = {}>(args?: Subset<T, theatre$screensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shows<T extends theatre$showsArgs<ExtArgs> = {}>(args?: Subset<T, theatre$showsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the theatre model
   */
  interface theatreFieldRefs {
    readonly theatre_Id: FieldRef<"theatre", 'Int'>
    readonly Name: FieldRef<"theatre", 'String'>
    readonly Total_no_of_screens: FieldRef<"theatre", 'Int'>
    readonly Address_Pincode: FieldRef<"theatre", 'String'>
    readonly Address_City: FieldRef<"theatre", 'String'>
    readonly Address_Area: FieldRef<"theatre", 'String'>
    readonly Address_Landmark: FieldRef<"theatre", 'String'>
    readonly Address_BuildingNo: FieldRef<"theatre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * theatre findUnique
   */
  export type theatreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theatre
     */
    select?: theatreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theatre
     */
    omit?: theatreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: theatreInclude<ExtArgs> | null
    /**
     * Filter, which theatre to fetch.
     */
    where: theatreWhereUniqueInput
  }

  /**
   * theatre findUniqueOrThrow
   */
  export type theatreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theatre
     */
    select?: theatreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theatre
     */
    omit?: theatreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: theatreInclude<ExtArgs> | null
    /**
     * Filter, which theatre to fetch.
     */
    where: theatreWhereUniqueInput
  }

  /**
   * theatre findFirst
   */
  export type theatreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theatre
     */
    select?: theatreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theatre
     */
    omit?: theatreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: theatreInclude<ExtArgs> | null
    /**
     * Filter, which theatre to fetch.
     */
    where?: theatreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of theatres to fetch.
     */
    orderBy?: theatreOrderByWithRelationInput | theatreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for theatres.
     */
    cursor?: theatreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` theatres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` theatres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of theatres.
     */
    distinct?: TheatreScalarFieldEnum | TheatreScalarFieldEnum[]
  }

  /**
   * theatre findFirstOrThrow
   */
  export type theatreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theatre
     */
    select?: theatreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theatre
     */
    omit?: theatreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: theatreInclude<ExtArgs> | null
    /**
     * Filter, which theatre to fetch.
     */
    where?: theatreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of theatres to fetch.
     */
    orderBy?: theatreOrderByWithRelationInput | theatreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for theatres.
     */
    cursor?: theatreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` theatres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` theatres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of theatres.
     */
    distinct?: TheatreScalarFieldEnum | TheatreScalarFieldEnum[]
  }

  /**
   * theatre findMany
   */
  export type theatreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theatre
     */
    select?: theatreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theatre
     */
    omit?: theatreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: theatreInclude<ExtArgs> | null
    /**
     * Filter, which theatres to fetch.
     */
    where?: theatreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of theatres to fetch.
     */
    orderBy?: theatreOrderByWithRelationInput | theatreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing theatres.
     */
    cursor?: theatreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` theatres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` theatres.
     */
    skip?: number
    distinct?: TheatreScalarFieldEnum | TheatreScalarFieldEnum[]
  }

  /**
   * theatre create
   */
  export type theatreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theatre
     */
    select?: theatreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theatre
     */
    omit?: theatreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: theatreInclude<ExtArgs> | null
    /**
     * The data needed to create a theatre.
     */
    data?: XOR<theatreCreateInput, theatreUncheckedCreateInput>
  }

  /**
   * theatre createMany
   */
  export type theatreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many theatres.
     */
    data: theatreCreateManyInput | theatreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * theatre update
   */
  export type theatreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theatre
     */
    select?: theatreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theatre
     */
    omit?: theatreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: theatreInclude<ExtArgs> | null
    /**
     * The data needed to update a theatre.
     */
    data: XOR<theatreUpdateInput, theatreUncheckedUpdateInput>
    /**
     * Choose, which theatre to update.
     */
    where: theatreWhereUniqueInput
  }

  /**
   * theatre updateMany
   */
  export type theatreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update theatres.
     */
    data: XOR<theatreUpdateManyMutationInput, theatreUncheckedUpdateManyInput>
    /**
     * Filter which theatres to update
     */
    where?: theatreWhereInput
    /**
     * Limit how many theatres to update.
     */
    limit?: number
  }

  /**
   * theatre upsert
   */
  export type theatreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theatre
     */
    select?: theatreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theatre
     */
    omit?: theatreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: theatreInclude<ExtArgs> | null
    /**
     * The filter to search for the theatre to update in case it exists.
     */
    where: theatreWhereUniqueInput
    /**
     * In case the theatre found by the `where` argument doesn't exist, create a new theatre with this data.
     */
    create: XOR<theatreCreateInput, theatreUncheckedCreateInput>
    /**
     * In case the theatre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<theatreUpdateInput, theatreUncheckedUpdateInput>
  }

  /**
   * theatre delete
   */
  export type theatreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theatre
     */
    select?: theatreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theatre
     */
    omit?: theatreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: theatreInclude<ExtArgs> | null
    /**
     * Filter which theatre to delete.
     */
    where: theatreWhereUniqueInput
  }

  /**
   * theatre deleteMany
   */
  export type theatreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which theatres to delete
     */
    where?: theatreWhereInput
    /**
     * Limit how many theatres to delete.
     */
    limit?: number
  }

  /**
   * theatre.screens
   */
  export type theatre$screensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    where?: ScreenWhereInput
    orderBy?: ScreenOrderByWithRelationInput | ScreenOrderByWithRelationInput[]
    cursor?: ScreenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreenScalarFieldEnum | ScreenScalarFieldEnum[]
  }

  /**
   * theatre.shows
   */
  export type theatre$showsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Show
     */
    select?: ShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Show
     */
    omit?: ShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowInclude<ExtArgs> | null
    where?: ShowWhereInput
    orderBy?: ShowOrderByWithRelationInput | ShowOrderByWithRelationInput[]
    cursor?: ShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowScalarFieldEnum | ShowScalarFieldEnum[]
  }

  /**
   * theatre without action
   */
  export type theatreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theatre
     */
    select?: theatreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theatre
     */
    omit?: theatreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: theatreInclude<ExtArgs> | null
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


  export const MovieScalarFieldEnum: {
    Movie_Id: 'Movie_Id',
    Title: 'Title',
    Genre: 'Genre',
    Language: 'Language',
    Duration: 'Duration',
    Trailer_URL: 'Trailer_URL',
    Rating: 'Rating',
    Description: 'Description',
    Release_date: 'Release_date',
    Poster_url: 'Poster_url'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const ActorScalarFieldEnum: {
    Actor_Id: 'Actor_Id',
    Name: 'Name',
    Created_At: 'Created_At',
    actor_pic: 'actor_pic'
  };

  export type ActorScalarFieldEnum = (typeof ActorScalarFieldEnum)[keyof typeof ActorScalarFieldEnum]


  export const Movie_ActorScalarFieldEnum: {
    movie_Id: 'movie_Id',
    Actor_Id: 'Actor_Id',
    Role_Name: 'Role_Name'
  };

  export type Movie_ActorScalarFieldEnum = (typeof Movie_ActorScalarFieldEnum)[keyof typeof Movie_ActorScalarFieldEnum]


  export const ScreenScalarFieldEnum: {
    screen_no: 'screen_no',
    theatre_Id: 'theatre_Id',
    Screen_name: 'Screen_name',
    No_of_seats: 'No_of_seats',
    Layout_structure: 'Layout_structure'
  };

  export type ScreenScalarFieldEnum = (typeof ScreenScalarFieldEnum)[keyof typeof ScreenScalarFieldEnum]


  export const ShowScalarFieldEnum: {
    Show_Id: 'Show_Id',
    Movie_Id: 'Movie_Id',
    Theatre_Id: 'Theatre_Id',
    Screen_no: 'Screen_no',
    Show_date: 'Show_date',
    Start_time: 'Start_time',
    Show_dimension: 'Show_dimension'
  };

  export type ShowScalarFieldEnum = (typeof ShowScalarFieldEnum)[keyof typeof ShowScalarFieldEnum]


  export const SeatScalarFieldEnum: {
    seat_id: 'seat_id',
    show_id: 'show_id',
    seat_name: 'seat_name',
    seat_type: 'seat_type',
    status: 'status'
  };

  export type SeatScalarFieldEnum = (typeof SeatScalarFieldEnum)[keyof typeof SeatScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    Review_Id: 'Review_Id',
    movie_Id: 'movie_Id',
    Rating: 'Rating',
    Comment: 'Comment',
    Reviewed_At: 'Reviewed_At'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    booking_Id: 'booking_Id',
    customer_Id: 'customer_Id',
    show_id: 'show_id',
    Amount: 'Amount',
    Payment_method: 'Payment_method',
    Status: 'Status',
    payment_time: 'payment_time'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const Booking_seatsScalarFieldEnum: {
    booking_seat_id: 'booking_seat_id',
    booking_Id: 'booking_Id',
    seat_id: 'seat_id'
  };

  export type Booking_seatsScalarFieldEnum = (typeof Booking_seatsScalarFieldEnum)[keyof typeof Booking_seatsScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    customer_Id: 'customer_Id',
    F_Name: 'F_Name',
    L_Name: 'L_Name',
    Email: 'Email',
    Phone_No: 'Phone_No',
    Password: 'Password',
    Created_at: 'Created_at'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const TheatreScalarFieldEnum: {
    theatre_Id: 'theatre_Id',
    Name: 'Name',
    Total_no_of_screens: 'Total_no_of_screens',
    Address_Pincode: 'Address_Pincode',
    Address_City: 'Address_City',
    Address_Area: 'Address_Area',
    Address_Landmark: 'Address_Landmark',
    Address_BuildingNo: 'Address_BuildingNo'
  };

  export type TheatreScalarFieldEnum = (typeof TheatreScalarFieldEnum)[keyof typeof TheatreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MovieOrderByRelevanceFieldEnum: {
    Title: 'Title',
    Genre: 'Genre',
    Language: 'Language',
    Trailer_URL: 'Trailer_URL',
    Description: 'Description',
    Poster_url: 'Poster_url'
  };

  export type MovieOrderByRelevanceFieldEnum = (typeof MovieOrderByRelevanceFieldEnum)[keyof typeof MovieOrderByRelevanceFieldEnum]


  export const ActorOrderByRelevanceFieldEnum: {
    Name: 'Name',
    actor_pic: 'actor_pic'
  };

  export type ActorOrderByRelevanceFieldEnum = (typeof ActorOrderByRelevanceFieldEnum)[keyof typeof ActorOrderByRelevanceFieldEnum]


  export const Movie_ActorOrderByRelevanceFieldEnum: {
    Role_Name: 'Role_Name'
  };

  export type Movie_ActorOrderByRelevanceFieldEnum = (typeof Movie_ActorOrderByRelevanceFieldEnum)[keyof typeof Movie_ActorOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ScreenOrderByRelevanceFieldEnum: {
    Screen_name: 'Screen_name'
  };

  export type ScreenOrderByRelevanceFieldEnum = (typeof ScreenOrderByRelevanceFieldEnum)[keyof typeof ScreenOrderByRelevanceFieldEnum]


  export const SeatOrderByRelevanceFieldEnum: {
    seat_name: 'seat_name',
    seat_type: 'seat_type'
  };

  export type SeatOrderByRelevanceFieldEnum = (typeof SeatOrderByRelevanceFieldEnum)[keyof typeof SeatOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    Comment: 'Comment'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const bookingOrderByRelevanceFieldEnum: {
    Payment_method: 'Payment_method',
    Status: 'Status'
  };

  export type bookingOrderByRelevanceFieldEnum = (typeof bookingOrderByRelevanceFieldEnum)[keyof typeof bookingOrderByRelevanceFieldEnum]


  export const customerOrderByRelevanceFieldEnum: {
    F_Name: 'F_Name',
    L_Name: 'L_Name',
    Email: 'Email',
    Password: 'Password'
  };

  export type customerOrderByRelevanceFieldEnum = (typeof customerOrderByRelevanceFieldEnum)[keyof typeof customerOrderByRelevanceFieldEnum]


  export const theatreOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Address_Pincode: 'Address_Pincode',
    Address_City: 'Address_City',
    Address_Area: 'Address_Area',
    Address_Landmark: 'Address_Landmark',
    Address_BuildingNo: 'Address_BuildingNo'
  };

  export type theatreOrderByRelevanceFieldEnum = (typeof theatreOrderByRelevanceFieldEnum)[keyof typeof theatreOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'shows_Show_dimension'
   */
  export type Enumshows_Show_dimensionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'shows_Show_dimension'>
    


  /**
   * Reference to a field of type 'seats_status'
   */
  export type Enumseats_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'seats_status'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    
  /**
   * Deep Input Types
   */


  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    Movie_Id?: IntFilter<"Movie"> | number
    Title?: StringFilter<"Movie"> | string
    Genre?: StringNullableFilter<"Movie"> | string | null
    Language?: StringNullableFilter<"Movie"> | string | null
    Duration?: IntNullableFilter<"Movie"> | number | null
    Trailer_URL?: StringNullableFilter<"Movie"> | string | null
    Rating?: FloatNullableFilter<"Movie"> | number | null
    Description?: StringNullableFilter<"Movie"> | string | null
    Release_date?: DateTimeNullableFilter<"Movie"> | Date | string | null
    Poster_url?: StringNullableFilter<"Movie"> | string | null
    movie_actors?: Movie_ActorListRelationFilter
    reviews?: ReviewListRelationFilter
    shows?: ShowListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    Movie_Id?: SortOrder
    Title?: SortOrder
    Genre?: SortOrderInput | SortOrder
    Language?: SortOrderInput | SortOrder
    Duration?: SortOrderInput | SortOrder
    Trailer_URL?: SortOrderInput | SortOrder
    Rating?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Release_date?: SortOrderInput | SortOrder
    Poster_url?: SortOrderInput | SortOrder
    movie_actors?: Movie_ActorOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    shows?: ShowOrderByRelationAggregateInput
    _relevance?: MovieOrderByRelevanceInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    Movie_Id?: number
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    Title?: StringFilter<"Movie"> | string
    Genre?: StringNullableFilter<"Movie"> | string | null
    Language?: StringNullableFilter<"Movie"> | string | null
    Duration?: IntNullableFilter<"Movie"> | number | null
    Trailer_URL?: StringNullableFilter<"Movie"> | string | null
    Rating?: FloatNullableFilter<"Movie"> | number | null
    Description?: StringNullableFilter<"Movie"> | string | null
    Release_date?: DateTimeNullableFilter<"Movie"> | Date | string | null
    Poster_url?: StringNullableFilter<"Movie"> | string | null
    movie_actors?: Movie_ActorListRelationFilter
    reviews?: ReviewListRelationFilter
    shows?: ShowListRelationFilter
  }, "Movie_Id">

  export type MovieOrderByWithAggregationInput = {
    Movie_Id?: SortOrder
    Title?: SortOrder
    Genre?: SortOrderInput | SortOrder
    Language?: SortOrderInput | SortOrder
    Duration?: SortOrderInput | SortOrder
    Trailer_URL?: SortOrderInput | SortOrder
    Rating?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Release_date?: SortOrderInput | SortOrder
    Poster_url?: SortOrderInput | SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    Movie_Id?: IntWithAggregatesFilter<"Movie"> | number
    Title?: StringWithAggregatesFilter<"Movie"> | string
    Genre?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    Language?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    Duration?: IntNullableWithAggregatesFilter<"Movie"> | number | null
    Trailer_URL?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    Rating?: FloatNullableWithAggregatesFilter<"Movie"> | number | null
    Description?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    Release_date?: DateTimeNullableWithAggregatesFilter<"Movie"> | Date | string | null
    Poster_url?: StringNullableWithAggregatesFilter<"Movie"> | string | null
  }

  export type ActorWhereInput = {
    AND?: ActorWhereInput | ActorWhereInput[]
    OR?: ActorWhereInput[]
    NOT?: ActorWhereInput | ActorWhereInput[]
    Actor_Id?: IntFilter<"Actor"> | number
    Name?: StringFilter<"Actor"> | string
    Created_At?: DateTimeNullableFilter<"Actor"> | Date | string | null
    actor_pic?: StringNullableFilter<"Actor"> | string | null
    movie_actors?: Movie_ActorListRelationFilter
  }

  export type ActorOrderByWithRelationInput = {
    Actor_Id?: SortOrder
    Name?: SortOrder
    Created_At?: SortOrderInput | SortOrder
    actor_pic?: SortOrderInput | SortOrder
    movie_actors?: Movie_ActorOrderByRelationAggregateInput
    _relevance?: ActorOrderByRelevanceInput
  }

  export type ActorWhereUniqueInput = Prisma.AtLeast<{
    Actor_Id?: number
    AND?: ActorWhereInput | ActorWhereInput[]
    OR?: ActorWhereInput[]
    NOT?: ActorWhereInput | ActorWhereInput[]
    Name?: StringFilter<"Actor"> | string
    Created_At?: DateTimeNullableFilter<"Actor"> | Date | string | null
    actor_pic?: StringNullableFilter<"Actor"> | string | null
    movie_actors?: Movie_ActorListRelationFilter
  }, "Actor_Id">

  export type ActorOrderByWithAggregationInput = {
    Actor_Id?: SortOrder
    Name?: SortOrder
    Created_At?: SortOrderInput | SortOrder
    actor_pic?: SortOrderInput | SortOrder
    _count?: ActorCountOrderByAggregateInput
    _avg?: ActorAvgOrderByAggregateInput
    _max?: ActorMaxOrderByAggregateInput
    _min?: ActorMinOrderByAggregateInput
    _sum?: ActorSumOrderByAggregateInput
  }

  export type ActorScalarWhereWithAggregatesInput = {
    AND?: ActorScalarWhereWithAggregatesInput | ActorScalarWhereWithAggregatesInput[]
    OR?: ActorScalarWhereWithAggregatesInput[]
    NOT?: ActorScalarWhereWithAggregatesInput | ActorScalarWhereWithAggregatesInput[]
    Actor_Id?: IntWithAggregatesFilter<"Actor"> | number
    Name?: StringWithAggregatesFilter<"Actor"> | string
    Created_At?: DateTimeNullableWithAggregatesFilter<"Actor"> | Date | string | null
    actor_pic?: StringNullableWithAggregatesFilter<"Actor"> | string | null
  }

  export type Movie_ActorWhereInput = {
    AND?: Movie_ActorWhereInput | Movie_ActorWhereInput[]
    OR?: Movie_ActorWhereInput[]
    NOT?: Movie_ActorWhereInput | Movie_ActorWhereInput[]
    movie_Id?: IntFilter<"Movie_Actor"> | number
    Actor_Id?: IntFilter<"Movie_Actor"> | number
    Role_Name?: StringNullableFilter<"Movie_Actor"> | string | null
    movies?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    actor?: XOR<ActorScalarRelationFilter, ActorWhereInput>
  }

  export type Movie_ActorOrderByWithRelationInput = {
    movie_Id?: SortOrder
    Actor_Id?: SortOrder
    Role_Name?: SortOrderInput | SortOrder
    movies?: MovieOrderByWithRelationInput
    actor?: ActorOrderByWithRelationInput
    _relevance?: Movie_ActorOrderByRelevanceInput
  }

  export type Movie_ActorWhereUniqueInput = Prisma.AtLeast<{
    movie_Id_Actor_Id?: Movie_ActorMovie_IdActor_IdCompoundUniqueInput
    AND?: Movie_ActorWhereInput | Movie_ActorWhereInput[]
    OR?: Movie_ActorWhereInput[]
    NOT?: Movie_ActorWhereInput | Movie_ActorWhereInput[]
    movie_Id?: IntFilter<"Movie_Actor"> | number
    Actor_Id?: IntFilter<"Movie_Actor"> | number
    Role_Name?: StringNullableFilter<"Movie_Actor"> | string | null
    movies?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    actor?: XOR<ActorScalarRelationFilter, ActorWhereInput>
  }, "movie_Id_Actor_Id">

  export type Movie_ActorOrderByWithAggregationInput = {
    movie_Id?: SortOrder
    Actor_Id?: SortOrder
    Role_Name?: SortOrderInput | SortOrder
    _count?: Movie_ActorCountOrderByAggregateInput
    _avg?: Movie_ActorAvgOrderByAggregateInput
    _max?: Movie_ActorMaxOrderByAggregateInput
    _min?: Movie_ActorMinOrderByAggregateInput
    _sum?: Movie_ActorSumOrderByAggregateInput
  }

  export type Movie_ActorScalarWhereWithAggregatesInput = {
    AND?: Movie_ActorScalarWhereWithAggregatesInput | Movie_ActorScalarWhereWithAggregatesInput[]
    OR?: Movie_ActorScalarWhereWithAggregatesInput[]
    NOT?: Movie_ActorScalarWhereWithAggregatesInput | Movie_ActorScalarWhereWithAggregatesInput[]
    movie_Id?: IntWithAggregatesFilter<"Movie_Actor"> | number
    Actor_Id?: IntWithAggregatesFilter<"Movie_Actor"> | number
    Role_Name?: StringNullableWithAggregatesFilter<"Movie_Actor"> | string | null
  }

  export type ScreenWhereInput = {
    AND?: ScreenWhereInput | ScreenWhereInput[]
    OR?: ScreenWhereInput[]
    NOT?: ScreenWhereInput | ScreenWhereInput[]
    screen_no?: IntFilter<"Screen"> | number
    theatre_Id?: IntFilter<"Screen"> | number
    Screen_name?: StringNullableFilter<"Screen"> | string | null
    No_of_seats?: IntNullableFilter<"Screen"> | number | null
    Layout_structure?: JsonNullableFilter<"Screen">
    theatre?: XOR<TheatreScalarRelationFilter, theatreWhereInput>
    shows?: ShowListRelationFilter
  }

  export type ScreenOrderByWithRelationInput = {
    screen_no?: SortOrder
    theatre_Id?: SortOrder
    Screen_name?: SortOrderInput | SortOrder
    No_of_seats?: SortOrderInput | SortOrder
    Layout_structure?: SortOrderInput | SortOrder
    theatre?: theatreOrderByWithRelationInput
    shows?: ShowOrderByRelationAggregateInput
    _relevance?: ScreenOrderByRelevanceInput
  }

  export type ScreenWhereUniqueInput = Prisma.AtLeast<{
    screen_no_theatre_Id?: ScreenScreen_noTheatre_IdCompoundUniqueInput
    AND?: ScreenWhereInput | ScreenWhereInput[]
    OR?: ScreenWhereInput[]
    NOT?: ScreenWhereInput | ScreenWhereInput[]
    screen_no?: IntFilter<"Screen"> | number
    theatre_Id?: IntFilter<"Screen"> | number
    Screen_name?: StringNullableFilter<"Screen"> | string | null
    No_of_seats?: IntNullableFilter<"Screen"> | number | null
    Layout_structure?: JsonNullableFilter<"Screen">
    theatre?: XOR<TheatreScalarRelationFilter, theatreWhereInput>
    shows?: ShowListRelationFilter
  }, "screen_no_theatre_Id">

  export type ScreenOrderByWithAggregationInput = {
    screen_no?: SortOrder
    theatre_Id?: SortOrder
    Screen_name?: SortOrderInput | SortOrder
    No_of_seats?: SortOrderInput | SortOrder
    Layout_structure?: SortOrderInput | SortOrder
    _count?: ScreenCountOrderByAggregateInput
    _avg?: ScreenAvgOrderByAggregateInput
    _max?: ScreenMaxOrderByAggregateInput
    _min?: ScreenMinOrderByAggregateInput
    _sum?: ScreenSumOrderByAggregateInput
  }

  export type ScreenScalarWhereWithAggregatesInput = {
    AND?: ScreenScalarWhereWithAggregatesInput | ScreenScalarWhereWithAggregatesInput[]
    OR?: ScreenScalarWhereWithAggregatesInput[]
    NOT?: ScreenScalarWhereWithAggregatesInput | ScreenScalarWhereWithAggregatesInput[]
    screen_no?: IntWithAggregatesFilter<"Screen"> | number
    theatre_Id?: IntWithAggregatesFilter<"Screen"> | number
    Screen_name?: StringNullableWithAggregatesFilter<"Screen"> | string | null
    No_of_seats?: IntNullableWithAggregatesFilter<"Screen"> | number | null
    Layout_structure?: JsonNullableWithAggregatesFilter<"Screen">
  }

  export type ShowWhereInput = {
    AND?: ShowWhereInput | ShowWhereInput[]
    OR?: ShowWhereInput[]
    NOT?: ShowWhereInput | ShowWhereInput[]
    Show_Id?: IntFilter<"Show"> | number
    Movie_Id?: IntFilter<"Show"> | number
    Theatre_Id?: IntFilter<"Show"> | number
    Screen_no?: IntFilter<"Show"> | number
    Show_date?: DateTimeFilter<"Show"> | Date | string
    Start_time?: DateTimeFilter<"Show"> | Date | string
    Show_dimension?: Enumshows_Show_dimensionFilter<"Show"> | $Enums.shows_Show_dimension
    booking?: BookingListRelationFilter
    seats?: SeatListRelationFilter
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    theatre?: XOR<TheatreScalarRelationFilter, theatreWhereInput>
    screens?: XOR<ScreenScalarRelationFilter, ScreenWhereInput>
  }

  export type ShowOrderByWithRelationInput = {
    Show_Id?: SortOrder
    Movie_Id?: SortOrder
    Theatre_Id?: SortOrder
    Screen_no?: SortOrder
    Show_date?: SortOrder
    Start_time?: SortOrder
    Show_dimension?: SortOrder
    booking?: bookingOrderByRelationAggregateInput
    seats?: SeatOrderByRelationAggregateInput
    movie?: MovieOrderByWithRelationInput
    theatre?: theatreOrderByWithRelationInput
    screens?: ScreenOrderByWithRelationInput
  }

  export type ShowWhereUniqueInput = Prisma.AtLeast<{
    Show_Id?: number
    AND?: ShowWhereInput | ShowWhereInput[]
    OR?: ShowWhereInput[]
    NOT?: ShowWhereInput | ShowWhereInput[]
    Movie_Id?: IntFilter<"Show"> | number
    Theatre_Id?: IntFilter<"Show"> | number
    Screen_no?: IntFilter<"Show"> | number
    Show_date?: DateTimeFilter<"Show"> | Date | string
    Start_time?: DateTimeFilter<"Show"> | Date | string
    Show_dimension?: Enumshows_Show_dimensionFilter<"Show"> | $Enums.shows_Show_dimension
    booking?: BookingListRelationFilter
    seats?: SeatListRelationFilter
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    theatre?: XOR<TheatreScalarRelationFilter, theatreWhereInput>
    screens?: XOR<ScreenScalarRelationFilter, ScreenWhereInput>
  }, "Show_Id">

  export type ShowOrderByWithAggregationInput = {
    Show_Id?: SortOrder
    Movie_Id?: SortOrder
    Theatre_Id?: SortOrder
    Screen_no?: SortOrder
    Show_date?: SortOrder
    Start_time?: SortOrder
    Show_dimension?: SortOrder
    _count?: ShowCountOrderByAggregateInput
    _avg?: ShowAvgOrderByAggregateInput
    _max?: ShowMaxOrderByAggregateInput
    _min?: ShowMinOrderByAggregateInput
    _sum?: ShowSumOrderByAggregateInput
  }

  export type ShowScalarWhereWithAggregatesInput = {
    AND?: ShowScalarWhereWithAggregatesInput | ShowScalarWhereWithAggregatesInput[]
    OR?: ShowScalarWhereWithAggregatesInput[]
    NOT?: ShowScalarWhereWithAggregatesInput | ShowScalarWhereWithAggregatesInput[]
    Show_Id?: IntWithAggregatesFilter<"Show"> | number
    Movie_Id?: IntWithAggregatesFilter<"Show"> | number
    Theatre_Id?: IntWithAggregatesFilter<"Show"> | number
    Screen_no?: IntWithAggregatesFilter<"Show"> | number
    Show_date?: DateTimeWithAggregatesFilter<"Show"> | Date | string
    Start_time?: DateTimeWithAggregatesFilter<"Show"> | Date | string
    Show_dimension?: Enumshows_Show_dimensionWithAggregatesFilter<"Show"> | $Enums.shows_Show_dimension
  }

  export type SeatWhereInput = {
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    seat_id?: IntFilter<"Seat"> | number
    show_id?: IntFilter<"Seat"> | number
    seat_name?: StringFilter<"Seat"> | string
    seat_type?: StringNullableFilter<"Seat"> | string | null
    status?: Enumseats_statusNullableFilter<"Seat"> | $Enums.seats_status | null
    booking_seats?: Booking_seatsListRelationFilter
    shows?: XOR<ShowScalarRelationFilter, ShowWhereInput>
  }

  export type SeatOrderByWithRelationInput = {
    seat_id?: SortOrder
    show_id?: SortOrder
    seat_name?: SortOrder
    seat_type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    booking_seats?: booking_seatsOrderByRelationAggregateInput
    shows?: ShowOrderByWithRelationInput
    _relevance?: SeatOrderByRelevanceInput
  }

  export type SeatWhereUniqueInput = Prisma.AtLeast<{
    seat_id?: number
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    show_id?: IntFilter<"Seat"> | number
    seat_name?: StringFilter<"Seat"> | string
    seat_type?: StringNullableFilter<"Seat"> | string | null
    status?: Enumseats_statusNullableFilter<"Seat"> | $Enums.seats_status | null
    booking_seats?: Booking_seatsListRelationFilter
    shows?: XOR<ShowScalarRelationFilter, ShowWhereInput>
  }, "seat_id">

  export type SeatOrderByWithAggregationInput = {
    seat_id?: SortOrder
    show_id?: SortOrder
    seat_name?: SortOrder
    seat_type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: SeatCountOrderByAggregateInput
    _avg?: SeatAvgOrderByAggregateInput
    _max?: SeatMaxOrderByAggregateInput
    _min?: SeatMinOrderByAggregateInput
    _sum?: SeatSumOrderByAggregateInput
  }

  export type SeatScalarWhereWithAggregatesInput = {
    AND?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    OR?: SeatScalarWhereWithAggregatesInput[]
    NOT?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    seat_id?: IntWithAggregatesFilter<"Seat"> | number
    show_id?: IntWithAggregatesFilter<"Seat"> | number
    seat_name?: StringWithAggregatesFilter<"Seat"> | string
    seat_type?: StringNullableWithAggregatesFilter<"Seat"> | string | null
    status?: Enumseats_statusNullableWithAggregatesFilter<"Seat"> | $Enums.seats_status | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    Review_Id?: IntFilter<"Review"> | number
    movie_Id?: IntNullableFilter<"Review"> | number | null
    Rating?: IntNullableFilter<"Review"> | number | null
    Comment?: StringNullableFilter<"Review"> | string | null
    Reviewed_At?: DateTimeNullableFilter<"Review"> | Date | string | null
    movies?: XOR<MovieNullableScalarRelationFilter, MovieWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    Review_Id?: SortOrder
    movie_Id?: SortOrderInput | SortOrder
    Rating?: SortOrderInput | SortOrder
    Comment?: SortOrderInput | SortOrder
    Reviewed_At?: SortOrderInput | SortOrder
    movies?: MovieOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    Review_Id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    movie_Id?: IntNullableFilter<"Review"> | number | null
    Rating?: IntNullableFilter<"Review"> | number | null
    Comment?: StringNullableFilter<"Review"> | string | null
    Reviewed_At?: DateTimeNullableFilter<"Review"> | Date | string | null
    movies?: XOR<MovieNullableScalarRelationFilter, MovieWhereInput> | null
  }, "Review_Id">

  export type ReviewOrderByWithAggregationInput = {
    Review_Id?: SortOrder
    movie_Id?: SortOrderInput | SortOrder
    Rating?: SortOrderInput | SortOrder
    Comment?: SortOrderInput | SortOrder
    Reviewed_At?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    Review_Id?: IntWithAggregatesFilter<"Review"> | number
    movie_Id?: IntNullableWithAggregatesFilter<"Review"> | number | null
    Rating?: IntNullableWithAggregatesFilter<"Review"> | number | null
    Comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    Reviewed_At?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
  }

  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    booking_Id?: IntFilter<"booking"> | number
    customer_Id?: IntNullableFilter<"booking"> | number | null
    show_id?: IntNullableFilter<"booking"> | number | null
    Amount?: DecimalFilter<"booking"> | Decimal | DecimalJsLike | number | string
    Payment_method?: StringNullableFilter<"booking"> | string | null
    Status?: StringFilter<"booking"> | string
    payment_time?: DateTimeNullableFilter<"booking"> | Date | string | null
    customer?: XOR<CustomerNullableScalarRelationFilter, customerWhereInput> | null
    shows?: XOR<ShowNullableScalarRelationFilter, ShowWhereInput> | null
    booking_seats?: Booking_seatsListRelationFilter
  }

  export type bookingOrderByWithRelationInput = {
    booking_Id?: SortOrder
    customer_Id?: SortOrderInput | SortOrder
    show_id?: SortOrderInput | SortOrder
    Amount?: SortOrder
    Payment_method?: SortOrderInput | SortOrder
    Status?: SortOrder
    payment_time?: SortOrderInput | SortOrder
    customer?: customerOrderByWithRelationInput
    shows?: ShowOrderByWithRelationInput
    booking_seats?: booking_seatsOrderByRelationAggregateInput
    _relevance?: bookingOrderByRelevanceInput
  }

  export type bookingWhereUniqueInput = Prisma.AtLeast<{
    booking_Id?: number
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    customer_Id?: IntNullableFilter<"booking"> | number | null
    show_id?: IntNullableFilter<"booking"> | number | null
    Amount?: DecimalFilter<"booking"> | Decimal | DecimalJsLike | number | string
    Payment_method?: StringNullableFilter<"booking"> | string | null
    Status?: StringFilter<"booking"> | string
    payment_time?: DateTimeNullableFilter<"booking"> | Date | string | null
    customer?: XOR<CustomerNullableScalarRelationFilter, customerWhereInput> | null
    shows?: XOR<ShowNullableScalarRelationFilter, ShowWhereInput> | null
    booking_seats?: Booking_seatsListRelationFilter
  }, "booking_Id">

  export type bookingOrderByWithAggregationInput = {
    booking_Id?: SortOrder
    customer_Id?: SortOrderInput | SortOrder
    show_id?: SortOrderInput | SortOrder
    Amount?: SortOrder
    Payment_method?: SortOrderInput | SortOrder
    Status?: SortOrder
    payment_time?: SortOrderInput | SortOrder
    _count?: bookingCountOrderByAggregateInput
    _avg?: bookingAvgOrderByAggregateInput
    _max?: bookingMaxOrderByAggregateInput
    _min?: bookingMinOrderByAggregateInput
    _sum?: bookingSumOrderByAggregateInput
  }

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    OR?: bookingScalarWhereWithAggregatesInput[]
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    booking_Id?: IntWithAggregatesFilter<"booking"> | number
    customer_Id?: IntNullableWithAggregatesFilter<"booking"> | number | null
    show_id?: IntNullableWithAggregatesFilter<"booking"> | number | null
    Amount?: DecimalWithAggregatesFilter<"booking"> | Decimal | DecimalJsLike | number | string
    Payment_method?: StringNullableWithAggregatesFilter<"booking"> | string | null
    Status?: StringWithAggregatesFilter<"booking"> | string
    payment_time?: DateTimeNullableWithAggregatesFilter<"booking"> | Date | string | null
  }

  export type booking_seatsWhereInput = {
    AND?: booking_seatsWhereInput | booking_seatsWhereInput[]
    OR?: booking_seatsWhereInput[]
    NOT?: booking_seatsWhereInput | booking_seatsWhereInput[]
    booking_seat_id?: IntFilter<"booking_seats"> | number
    booking_Id?: IntNullableFilter<"booking_seats"> | number | null
    seat_id?: IntNullableFilter<"booking_seats"> | number | null
    booking?: XOR<BookingNullableScalarRelationFilter, bookingWhereInput> | null
    seats?: XOR<SeatNullableScalarRelationFilter, SeatWhereInput> | null
  }

  export type booking_seatsOrderByWithRelationInput = {
    booking_seat_id?: SortOrder
    booking_Id?: SortOrderInput | SortOrder
    seat_id?: SortOrderInput | SortOrder
    booking?: bookingOrderByWithRelationInput
    seats?: SeatOrderByWithRelationInput
  }

  export type booking_seatsWhereUniqueInput = Prisma.AtLeast<{
    booking_seat_id?: number
    booking_Id_seat_id?: booking_seatsBooking_IdSeat_idCompoundUniqueInput
    AND?: booking_seatsWhereInput | booking_seatsWhereInput[]
    OR?: booking_seatsWhereInput[]
    NOT?: booking_seatsWhereInput | booking_seatsWhereInput[]
    booking_Id?: IntNullableFilter<"booking_seats"> | number | null
    seat_id?: IntNullableFilter<"booking_seats"> | number | null
    booking?: XOR<BookingNullableScalarRelationFilter, bookingWhereInput> | null
    seats?: XOR<SeatNullableScalarRelationFilter, SeatWhereInput> | null
  }, "booking_seat_id" | "booking_Id_seat_id">

  export type booking_seatsOrderByWithAggregationInput = {
    booking_seat_id?: SortOrder
    booking_Id?: SortOrderInput | SortOrder
    seat_id?: SortOrderInput | SortOrder
    _count?: booking_seatsCountOrderByAggregateInput
    _avg?: booking_seatsAvgOrderByAggregateInput
    _max?: booking_seatsMaxOrderByAggregateInput
    _min?: booking_seatsMinOrderByAggregateInput
    _sum?: booking_seatsSumOrderByAggregateInput
  }

  export type booking_seatsScalarWhereWithAggregatesInput = {
    AND?: booking_seatsScalarWhereWithAggregatesInput | booking_seatsScalarWhereWithAggregatesInput[]
    OR?: booking_seatsScalarWhereWithAggregatesInput[]
    NOT?: booking_seatsScalarWhereWithAggregatesInput | booking_seatsScalarWhereWithAggregatesInput[]
    booking_seat_id?: IntWithAggregatesFilter<"booking_seats"> | number
    booking_Id?: IntNullableWithAggregatesFilter<"booking_seats"> | number | null
    seat_id?: IntNullableWithAggregatesFilter<"booking_seats"> | number | null
  }

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    customer_Id?: IntFilter<"customer"> | number
    F_Name?: StringFilter<"customer"> | string
    L_Name?: StringFilter<"customer"> | string
    Email?: StringFilter<"customer"> | string
    Phone_No?: BigIntFilter<"customer"> | bigint | number
    Password?: StringFilter<"customer"> | string
    Created_at?: DateTimeNullableFilter<"customer"> | Date | string | null
    booking?: BookingListRelationFilter
  }

  export type customerOrderByWithRelationInput = {
    customer_Id?: SortOrder
    F_Name?: SortOrder
    L_Name?: SortOrder
    Email?: SortOrder
    Phone_No?: SortOrder
    Password?: SortOrder
    Created_at?: SortOrderInput | SortOrder
    booking?: bookingOrderByRelationAggregateInput
    _relevance?: customerOrderByRelevanceInput
  }

  export type customerWhereUniqueInput = Prisma.AtLeast<{
    customer_Id?: number
    Email?: string
    Phone_No?: bigint | number
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    F_Name?: StringFilter<"customer"> | string
    L_Name?: StringFilter<"customer"> | string
    Password?: StringFilter<"customer"> | string
    Created_at?: DateTimeNullableFilter<"customer"> | Date | string | null
    booking?: BookingListRelationFilter
  }, "customer_Id" | "Email" | "Phone_No">

  export type customerOrderByWithAggregationInput = {
    customer_Id?: SortOrder
    F_Name?: SortOrder
    L_Name?: SortOrder
    Email?: SortOrder
    Phone_No?: SortOrder
    Password?: SortOrder
    Created_at?: SortOrderInput | SortOrder
    _count?: customerCountOrderByAggregateInput
    _avg?: customerAvgOrderByAggregateInput
    _max?: customerMaxOrderByAggregateInput
    _min?: customerMinOrderByAggregateInput
    _sum?: customerSumOrderByAggregateInput
  }

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    OR?: customerScalarWhereWithAggregatesInput[]
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    customer_Id?: IntWithAggregatesFilter<"customer"> | number
    F_Name?: StringWithAggregatesFilter<"customer"> | string
    L_Name?: StringWithAggregatesFilter<"customer"> | string
    Email?: StringWithAggregatesFilter<"customer"> | string
    Phone_No?: BigIntWithAggregatesFilter<"customer"> | bigint | number
    Password?: StringWithAggregatesFilter<"customer"> | string
    Created_at?: DateTimeNullableWithAggregatesFilter<"customer"> | Date | string | null
  }

  export type theatreWhereInput = {
    AND?: theatreWhereInput | theatreWhereInput[]
    OR?: theatreWhereInput[]
    NOT?: theatreWhereInput | theatreWhereInput[]
    theatre_Id?: IntFilter<"theatre"> | number
    Name?: StringNullableFilter<"theatre"> | string | null
    Total_no_of_screens?: IntNullableFilter<"theatre"> | number | null
    Address_Pincode?: StringNullableFilter<"theatre"> | string | null
    Address_City?: StringNullableFilter<"theatre"> | string | null
    Address_Area?: StringNullableFilter<"theatre"> | string | null
    Address_Landmark?: StringNullableFilter<"theatre"> | string | null
    Address_BuildingNo?: StringNullableFilter<"theatre"> | string | null
    screens?: ScreenListRelationFilter
    shows?: ShowListRelationFilter
  }

  export type theatreOrderByWithRelationInput = {
    theatre_Id?: SortOrder
    Name?: SortOrderInput | SortOrder
    Total_no_of_screens?: SortOrderInput | SortOrder
    Address_Pincode?: SortOrderInput | SortOrder
    Address_City?: SortOrderInput | SortOrder
    Address_Area?: SortOrderInput | SortOrder
    Address_Landmark?: SortOrderInput | SortOrder
    Address_BuildingNo?: SortOrderInput | SortOrder
    screens?: ScreenOrderByRelationAggregateInput
    shows?: ShowOrderByRelationAggregateInput
    _relevance?: theatreOrderByRelevanceInput
  }

  export type theatreWhereUniqueInput = Prisma.AtLeast<{
    theatre_Id?: number
    AND?: theatreWhereInput | theatreWhereInput[]
    OR?: theatreWhereInput[]
    NOT?: theatreWhereInput | theatreWhereInput[]
    Name?: StringNullableFilter<"theatre"> | string | null
    Total_no_of_screens?: IntNullableFilter<"theatre"> | number | null
    Address_Pincode?: StringNullableFilter<"theatre"> | string | null
    Address_City?: StringNullableFilter<"theatre"> | string | null
    Address_Area?: StringNullableFilter<"theatre"> | string | null
    Address_Landmark?: StringNullableFilter<"theatre"> | string | null
    Address_BuildingNo?: StringNullableFilter<"theatre"> | string | null
    screens?: ScreenListRelationFilter
    shows?: ShowListRelationFilter
  }, "theatre_Id">

  export type theatreOrderByWithAggregationInput = {
    theatre_Id?: SortOrder
    Name?: SortOrderInput | SortOrder
    Total_no_of_screens?: SortOrderInput | SortOrder
    Address_Pincode?: SortOrderInput | SortOrder
    Address_City?: SortOrderInput | SortOrder
    Address_Area?: SortOrderInput | SortOrder
    Address_Landmark?: SortOrderInput | SortOrder
    Address_BuildingNo?: SortOrderInput | SortOrder
    _count?: theatreCountOrderByAggregateInput
    _avg?: theatreAvgOrderByAggregateInput
    _max?: theatreMaxOrderByAggregateInput
    _min?: theatreMinOrderByAggregateInput
    _sum?: theatreSumOrderByAggregateInput
  }

  export type theatreScalarWhereWithAggregatesInput = {
    AND?: theatreScalarWhereWithAggregatesInput | theatreScalarWhereWithAggregatesInput[]
    OR?: theatreScalarWhereWithAggregatesInput[]
    NOT?: theatreScalarWhereWithAggregatesInput | theatreScalarWhereWithAggregatesInput[]
    theatre_Id?: IntWithAggregatesFilter<"theatre"> | number
    Name?: StringNullableWithAggregatesFilter<"theatre"> | string | null
    Total_no_of_screens?: IntNullableWithAggregatesFilter<"theatre"> | number | null
    Address_Pincode?: StringNullableWithAggregatesFilter<"theatre"> | string | null
    Address_City?: StringNullableWithAggregatesFilter<"theatre"> | string | null
    Address_Area?: StringNullableWithAggregatesFilter<"theatre"> | string | null
    Address_Landmark?: StringNullableWithAggregatesFilter<"theatre"> | string | null
    Address_BuildingNo?: StringNullableWithAggregatesFilter<"theatre"> | string | null
  }

  export type MovieCreateInput = {
    Title: string
    Genre?: string | null
    Language?: string | null
    Duration?: number | null
    Trailer_URL?: string | null
    Rating?: number | null
    Description?: string | null
    Release_date?: Date | string | null
    Poster_url?: string | null
    movie_actors?: Movie_ActorCreateNestedManyWithoutMoviesInput
    reviews?: ReviewCreateNestedManyWithoutMoviesInput
    shows?: ShowCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    Movie_Id?: number
    Title: string
    Genre?: string | null
    Language?: string | null
    Duration?: number | null
    Trailer_URL?: string | null
    Rating?: number | null
    Description?: string | null
    Release_date?: Date | string | null
    Poster_url?: string | null
    movie_actors?: Movie_ActorUncheckedCreateNestedManyWithoutMoviesInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutMoviesInput
    shows?: ShowUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieUpdateInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Genre?: NullableStringFieldUpdateOperationsInput | string | null
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    Trailer_URL?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableFloatFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    movie_actors?: Movie_ActorUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewUpdateManyWithoutMoviesNestedInput
    shows?: ShowUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Genre?: NullableStringFieldUpdateOperationsInput | string | null
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    Trailer_URL?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableFloatFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    movie_actors?: Movie_ActorUncheckedUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutMoviesNestedInput
    shows?: ShowUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateManyInput = {
    Movie_Id?: number
    Title: string
    Genre?: string | null
    Language?: string | null
    Duration?: number | null
    Trailer_URL?: string | null
    Rating?: number | null
    Description?: string | null
    Release_date?: Date | string | null
    Poster_url?: string | null
  }

  export type MovieUpdateManyMutationInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Genre?: NullableStringFieldUpdateOperationsInput | string | null
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    Trailer_URL?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableFloatFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Poster_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieUncheckedUpdateManyInput = {
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Genre?: NullableStringFieldUpdateOperationsInput | string | null
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    Trailer_URL?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableFloatFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Poster_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActorCreateInput = {
    Name: string
    Created_At?: Date | string | null
    actor_pic?: string | null
    movie_actors?: Movie_ActorCreateNestedManyWithoutActorInput
  }

  export type ActorUncheckedCreateInput = {
    Actor_Id?: number
    Name: string
    Created_At?: Date | string | null
    actor_pic?: string | null
    movie_actors?: Movie_ActorUncheckedCreateNestedManyWithoutActorInput
  }

  export type ActorUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actor_pic?: NullableStringFieldUpdateOperationsInput | string | null
    movie_actors?: Movie_ActorUpdateManyWithoutActorNestedInput
  }

  export type ActorUncheckedUpdateInput = {
    Actor_Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actor_pic?: NullableStringFieldUpdateOperationsInput | string | null
    movie_actors?: Movie_ActorUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ActorCreateManyInput = {
    Actor_Id?: number
    Name: string
    Created_At?: Date | string | null
    actor_pic?: string | null
  }

  export type ActorUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actor_pic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActorUncheckedUpdateManyInput = {
    Actor_Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actor_pic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Movie_ActorCreateInput = {
    Role_Name?: string | null
    movies: MovieCreateNestedOneWithoutMovie_actorsInput
    actor: ActorCreateNestedOneWithoutMovie_actorsInput
  }

  export type Movie_ActorUncheckedCreateInput = {
    movie_Id: number
    Actor_Id: number
    Role_Name?: string | null
  }

  export type Movie_ActorUpdateInput = {
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUpdateOneRequiredWithoutMovie_actorsNestedInput
    actor?: ActorUpdateOneRequiredWithoutMovie_actorsNestedInput
  }

  export type Movie_ActorUncheckedUpdateInput = {
    movie_Id?: IntFieldUpdateOperationsInput | number
    Actor_Id?: IntFieldUpdateOperationsInput | number
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Movie_ActorCreateManyInput = {
    movie_Id: number
    Actor_Id: number
    Role_Name?: string | null
  }

  export type Movie_ActorUpdateManyMutationInput = {
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Movie_ActorUncheckedUpdateManyInput = {
    movie_Id?: IntFieldUpdateOperationsInput | number
    Actor_Id?: IntFieldUpdateOperationsInput | number
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScreenCreateInput = {
    screen_no: number
    Screen_name?: string | null
    No_of_seats?: number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
    theatre: theatreCreateNestedOneWithoutScreensInput
    shows?: ShowCreateNestedManyWithoutScreensInput
  }

  export type ScreenUncheckedCreateInput = {
    screen_no: number
    theatre_Id: number
    Screen_name?: string | null
    No_of_seats?: number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
    shows?: ShowUncheckedCreateNestedManyWithoutScreensInput
  }

  export type ScreenUpdateInput = {
    screen_no?: IntFieldUpdateOperationsInput | number
    Screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    No_of_seats?: NullableIntFieldUpdateOperationsInput | number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
    theatre?: theatreUpdateOneRequiredWithoutScreensNestedInput
    shows?: ShowUpdateManyWithoutScreensNestedInput
  }

  export type ScreenUncheckedUpdateInput = {
    screen_no?: IntFieldUpdateOperationsInput | number
    theatre_Id?: IntFieldUpdateOperationsInput | number
    Screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    No_of_seats?: NullableIntFieldUpdateOperationsInput | number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
    shows?: ShowUncheckedUpdateManyWithoutScreensNestedInput
  }

  export type ScreenCreateManyInput = {
    screen_no: number
    theatre_Id: number
    Screen_name?: string | null
    No_of_seats?: number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScreenUpdateManyMutationInput = {
    screen_no?: IntFieldUpdateOperationsInput | number
    Screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    No_of_seats?: NullableIntFieldUpdateOperationsInput | number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScreenUncheckedUpdateManyInput = {
    screen_no?: IntFieldUpdateOperationsInput | number
    theatre_Id?: IntFieldUpdateOperationsInput | number
    Screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    No_of_seats?: NullableIntFieldUpdateOperationsInput | number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ShowCreateInput = {
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
    booking?: bookingCreateNestedManyWithoutShowsInput
    seats?: SeatCreateNestedManyWithoutShowsInput
    movie: MovieCreateNestedOneWithoutShowsInput
    theatre: theatreCreateNestedOneWithoutShowsInput
    screens: ScreenCreateNestedOneWithoutShowsInput
  }

  export type ShowUncheckedCreateInput = {
    Show_Id?: number
    Movie_Id: number
    Theatre_Id: number
    Screen_no: number
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
    booking?: bookingUncheckedCreateNestedManyWithoutShowsInput
    seats?: SeatUncheckedCreateNestedManyWithoutShowsInput
  }

  export type ShowUpdateInput = {
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
    booking?: bookingUpdateManyWithoutShowsNestedInput
    seats?: SeatUpdateManyWithoutShowsNestedInput
    movie?: MovieUpdateOneRequiredWithoutShowsNestedInput
    theatre?: theatreUpdateOneRequiredWithoutShowsNestedInput
    screens?: ScreenUpdateOneRequiredWithoutShowsNestedInput
  }

  export type ShowUncheckedUpdateInput = {
    Show_Id?: IntFieldUpdateOperationsInput | number
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Theatre_Id?: IntFieldUpdateOperationsInput | number
    Screen_no?: IntFieldUpdateOperationsInput | number
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
    booking?: bookingUncheckedUpdateManyWithoutShowsNestedInput
    seats?: SeatUncheckedUpdateManyWithoutShowsNestedInput
  }

  export type ShowCreateManyInput = {
    Show_Id?: number
    Movie_Id: number
    Theatre_Id: number
    Screen_no: number
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
  }

  export type ShowUpdateManyMutationInput = {
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
  }

  export type ShowUncheckedUpdateManyInput = {
    Show_Id?: IntFieldUpdateOperationsInput | number
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Theatre_Id?: IntFieldUpdateOperationsInput | number
    Screen_no?: IntFieldUpdateOperationsInput | number
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
  }

  export type SeatCreateInput = {
    seat_name: string
    seat_type?: string | null
    status?: $Enums.seats_status | null
    booking_seats?: booking_seatsCreateNestedManyWithoutSeatsInput
    shows: ShowCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateInput = {
    seat_id?: number
    show_id: number
    seat_name: string
    seat_type?: string | null
    status?: $Enums.seats_status | null
    booking_seats?: booking_seatsUncheckedCreateNestedManyWithoutSeatsInput
  }

  export type SeatUpdateInput = {
    seat_name?: StringFieldUpdateOperationsInput | string
    seat_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumseats_statusFieldUpdateOperationsInput | $Enums.seats_status | null
    booking_seats?: booking_seatsUpdateManyWithoutSeatsNestedInput
    shows?: ShowUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateInput = {
    seat_id?: IntFieldUpdateOperationsInput | number
    show_id?: IntFieldUpdateOperationsInput | number
    seat_name?: StringFieldUpdateOperationsInput | string
    seat_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumseats_statusFieldUpdateOperationsInput | $Enums.seats_status | null
    booking_seats?: booking_seatsUncheckedUpdateManyWithoutSeatsNestedInput
  }

  export type SeatCreateManyInput = {
    seat_id?: number
    show_id: number
    seat_name: string
    seat_type?: string | null
    status?: $Enums.seats_status | null
  }

  export type SeatUpdateManyMutationInput = {
    seat_name?: StringFieldUpdateOperationsInput | string
    seat_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumseats_statusFieldUpdateOperationsInput | $Enums.seats_status | null
  }

  export type SeatUncheckedUpdateManyInput = {
    seat_id?: IntFieldUpdateOperationsInput | number
    show_id?: IntFieldUpdateOperationsInput | number
    seat_name?: StringFieldUpdateOperationsInput | string
    seat_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumseats_statusFieldUpdateOperationsInput | $Enums.seats_status | null
  }

  export type ReviewCreateInput = {
    Rating?: number | null
    Comment?: string | null
    Reviewed_At?: Date | string | null
    movies?: MovieCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    Review_Id?: number
    movie_Id?: number | null
    Rating?: number | null
    Comment?: string | null
    Reviewed_At?: Date | string | null
  }

  export type ReviewUpdateInput = {
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Reviewed_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    movies?: MovieUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    Review_Id?: IntFieldUpdateOperationsInput | number
    movie_Id?: NullableIntFieldUpdateOperationsInput | number | null
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Reviewed_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateManyInput = {
    Review_Id?: number
    movie_Id?: number | null
    Rating?: number | null
    Comment?: string | null
    Reviewed_At?: Date | string | null
  }

  export type ReviewUpdateManyMutationInput = {
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Reviewed_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyInput = {
    Review_Id?: IntFieldUpdateOperationsInput | number
    movie_Id?: NullableIntFieldUpdateOperationsInput | number | null
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Reviewed_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingCreateInput = {
    Amount: Decimal | DecimalJsLike | number | string
    Payment_method?: string | null
    Status?: string
    payment_time?: Date | string | null
    customer?: customerCreateNestedOneWithoutBookingInput
    shows?: ShowCreateNestedOneWithoutBookingInput
    booking_seats?: booking_seatsCreateNestedManyWithoutBookingInput
  }

  export type bookingUncheckedCreateInput = {
    booking_Id?: number
    customer_Id?: number | null
    show_id?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    Payment_method?: string | null
    Status?: string
    payment_time?: Date | string | null
    booking_seats?: booking_seatsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingUpdateInput = {
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: StringFieldUpdateOperationsInput | string
    payment_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customerUpdateOneWithoutBookingNestedInput
    shows?: ShowUpdateOneWithoutBookingNestedInput
    booking_seats?: booking_seatsUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateInput = {
    booking_Id?: IntFieldUpdateOperationsInput | number
    customer_Id?: NullableIntFieldUpdateOperationsInput | number | null
    show_id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: StringFieldUpdateOperationsInput | string
    payment_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    booking_seats?: booking_seatsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingCreateManyInput = {
    booking_Id?: number
    customer_Id?: number | null
    show_id?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    Payment_method?: string | null
    Status?: string
    payment_time?: Date | string | null
  }

  export type bookingUpdateManyMutationInput = {
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: StringFieldUpdateOperationsInput | string
    payment_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingUncheckedUpdateManyInput = {
    booking_Id?: IntFieldUpdateOperationsInput | number
    customer_Id?: NullableIntFieldUpdateOperationsInput | number | null
    show_id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: StringFieldUpdateOperationsInput | string
    payment_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type booking_seatsCreateInput = {
    booking?: bookingCreateNestedOneWithoutBooking_seatsInput
    seats?: SeatCreateNestedOneWithoutBooking_seatsInput
  }

  export type booking_seatsUncheckedCreateInput = {
    booking_seat_id?: number
    booking_Id?: number | null
    seat_id?: number | null
  }

  export type booking_seatsUpdateInput = {
    booking?: bookingUpdateOneWithoutBooking_seatsNestedInput
    seats?: SeatUpdateOneWithoutBooking_seatsNestedInput
  }

  export type booking_seatsUncheckedUpdateInput = {
    booking_seat_id?: IntFieldUpdateOperationsInput | number
    booking_Id?: NullableIntFieldUpdateOperationsInput | number | null
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type booking_seatsCreateManyInput = {
    booking_seat_id?: number
    booking_Id?: number | null
    seat_id?: number | null
  }

  export type booking_seatsUpdateManyMutationInput = {

  }

  export type booking_seatsUncheckedUpdateManyInput = {
    booking_seat_id?: IntFieldUpdateOperationsInput | number
    booking_Id?: NullableIntFieldUpdateOperationsInput | number | null
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type customerCreateInput = {
    F_Name: string
    L_Name: string
    Email: string
    Phone_No: bigint | number
    Password: string
    Created_at?: Date | string | null
    booking?: bookingCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateInput = {
    customer_Id?: number
    F_Name: string
    L_Name: string
    Email: string
    Phone_No: bigint | number
    Password: string
    Created_at?: Date | string | null
    booking?: bookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerUpdateInput = {
    F_Name?: StringFieldUpdateOperationsInput | string
    L_Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone_No?: BigIntFieldUpdateOperationsInput | bigint | number
    Password?: StringFieldUpdateOperationsInput | string
    Created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    booking?: bookingUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateInput = {
    customer_Id?: IntFieldUpdateOperationsInput | number
    F_Name?: StringFieldUpdateOperationsInput | string
    L_Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone_No?: BigIntFieldUpdateOperationsInput | bigint | number
    Password?: StringFieldUpdateOperationsInput | string
    Created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    booking?: bookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerCreateManyInput = {
    customer_Id?: number
    F_Name: string
    L_Name: string
    Email: string
    Phone_No: bigint | number
    Password: string
    Created_at?: Date | string | null
  }

  export type customerUpdateManyMutationInput = {
    F_Name?: StringFieldUpdateOperationsInput | string
    L_Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone_No?: BigIntFieldUpdateOperationsInput | bigint | number
    Password?: StringFieldUpdateOperationsInput | string
    Created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customerUncheckedUpdateManyInput = {
    customer_Id?: IntFieldUpdateOperationsInput | number
    F_Name?: StringFieldUpdateOperationsInput | string
    L_Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone_No?: BigIntFieldUpdateOperationsInput | bigint | number
    Password?: StringFieldUpdateOperationsInput | string
    Created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type theatreCreateInput = {
    Name?: string | null
    Total_no_of_screens?: number | null
    Address_Pincode?: string | null
    Address_City?: string | null
    Address_Area?: string | null
    Address_Landmark?: string | null
    Address_BuildingNo?: string | null
    screens?: ScreenCreateNestedManyWithoutTheatreInput
    shows?: ShowCreateNestedManyWithoutTheatreInput
  }

  export type theatreUncheckedCreateInput = {
    theatre_Id?: number
    Name?: string | null
    Total_no_of_screens?: number | null
    Address_Pincode?: string | null
    Address_City?: string | null
    Address_Area?: string | null
    Address_Landmark?: string | null
    Address_BuildingNo?: string | null
    screens?: ScreenUncheckedCreateNestedManyWithoutTheatreInput
    shows?: ShowUncheckedCreateNestedManyWithoutTheatreInput
  }

  export type theatreUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Total_no_of_screens?: NullableIntFieldUpdateOperationsInput | number | null
    Address_Pincode?: NullableStringFieldUpdateOperationsInput | string | null
    Address_City?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Area?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Landmark?: NullableStringFieldUpdateOperationsInput | string | null
    Address_BuildingNo?: NullableStringFieldUpdateOperationsInput | string | null
    screens?: ScreenUpdateManyWithoutTheatreNestedInput
    shows?: ShowUpdateManyWithoutTheatreNestedInput
  }

  export type theatreUncheckedUpdateInput = {
    theatre_Id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Total_no_of_screens?: NullableIntFieldUpdateOperationsInput | number | null
    Address_Pincode?: NullableStringFieldUpdateOperationsInput | string | null
    Address_City?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Area?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Landmark?: NullableStringFieldUpdateOperationsInput | string | null
    Address_BuildingNo?: NullableStringFieldUpdateOperationsInput | string | null
    screens?: ScreenUncheckedUpdateManyWithoutTheatreNestedInput
    shows?: ShowUncheckedUpdateManyWithoutTheatreNestedInput
  }

  export type theatreCreateManyInput = {
    theatre_Id?: number
    Name?: string | null
    Total_no_of_screens?: number | null
    Address_Pincode?: string | null
    Address_City?: string | null
    Address_Area?: string | null
    Address_Landmark?: string | null
    Address_BuildingNo?: string | null
  }

  export type theatreUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Total_no_of_screens?: NullableIntFieldUpdateOperationsInput | number | null
    Address_Pincode?: NullableStringFieldUpdateOperationsInput | string | null
    Address_City?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Area?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Landmark?: NullableStringFieldUpdateOperationsInput | string | null
    Address_BuildingNo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type theatreUncheckedUpdateManyInput = {
    theatre_Id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Total_no_of_screens?: NullableIntFieldUpdateOperationsInput | number | null
    Address_Pincode?: NullableStringFieldUpdateOperationsInput | string | null
    Address_City?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Area?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Landmark?: NullableStringFieldUpdateOperationsInput | string | null
    Address_BuildingNo?: NullableStringFieldUpdateOperationsInput | string | null
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Movie_ActorListRelationFilter = {
    every?: Movie_ActorWhereInput
    some?: Movie_ActorWhereInput
    none?: Movie_ActorWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ShowListRelationFilter = {
    every?: ShowWhereInput
    some?: ShowWhereInput
    none?: ShowWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Movie_ActorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieOrderByRelevanceInput = {
    fields: MovieOrderByRelevanceFieldEnum | MovieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MovieCountOrderByAggregateInput = {
    Movie_Id?: SortOrder
    Title?: SortOrder
    Genre?: SortOrder
    Language?: SortOrder
    Duration?: SortOrder
    Trailer_URL?: SortOrder
    Rating?: SortOrder
    Description?: SortOrder
    Release_date?: SortOrder
    Poster_url?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    Movie_Id?: SortOrder
    Duration?: SortOrder
    Rating?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    Movie_Id?: SortOrder
    Title?: SortOrder
    Genre?: SortOrder
    Language?: SortOrder
    Duration?: SortOrder
    Trailer_URL?: SortOrder
    Rating?: SortOrder
    Description?: SortOrder
    Release_date?: SortOrder
    Poster_url?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    Movie_Id?: SortOrder
    Title?: SortOrder
    Genre?: SortOrder
    Language?: SortOrder
    Duration?: SortOrder
    Trailer_URL?: SortOrder
    Rating?: SortOrder
    Description?: SortOrder
    Release_date?: SortOrder
    Poster_url?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    Movie_Id?: SortOrder
    Duration?: SortOrder
    Rating?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ActorOrderByRelevanceInput = {
    fields: ActorOrderByRelevanceFieldEnum | ActorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActorCountOrderByAggregateInput = {
    Actor_Id?: SortOrder
    Name?: SortOrder
    Created_At?: SortOrder
    actor_pic?: SortOrder
  }

  export type ActorAvgOrderByAggregateInput = {
    Actor_Id?: SortOrder
  }

  export type ActorMaxOrderByAggregateInput = {
    Actor_Id?: SortOrder
    Name?: SortOrder
    Created_At?: SortOrder
    actor_pic?: SortOrder
  }

  export type ActorMinOrderByAggregateInput = {
    Actor_Id?: SortOrder
    Name?: SortOrder
    Created_At?: SortOrder
    actor_pic?: SortOrder
  }

  export type ActorSumOrderByAggregateInput = {
    Actor_Id?: SortOrder
  }

  export type MovieScalarRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type ActorScalarRelationFilter = {
    is?: ActorWhereInput
    isNot?: ActorWhereInput
  }

  export type Movie_ActorOrderByRelevanceInput = {
    fields: Movie_ActorOrderByRelevanceFieldEnum | Movie_ActorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Movie_ActorMovie_IdActor_IdCompoundUniqueInput = {
    movie_Id: number
    Actor_Id: number
  }

  export type Movie_ActorCountOrderByAggregateInput = {
    movie_Id?: SortOrder
    Actor_Id?: SortOrder
    Role_Name?: SortOrder
  }

  export type Movie_ActorAvgOrderByAggregateInput = {
    movie_Id?: SortOrder
    Actor_Id?: SortOrder
  }

  export type Movie_ActorMaxOrderByAggregateInput = {
    movie_Id?: SortOrder
    Actor_Id?: SortOrder
    Role_Name?: SortOrder
  }

  export type Movie_ActorMinOrderByAggregateInput = {
    movie_Id?: SortOrder
    Actor_Id?: SortOrder
    Role_Name?: SortOrder
  }

  export type Movie_ActorSumOrderByAggregateInput = {
    movie_Id?: SortOrder
    Actor_Id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TheatreScalarRelationFilter = {
    is?: theatreWhereInput
    isNot?: theatreWhereInput
  }

  export type ScreenOrderByRelevanceInput = {
    fields: ScreenOrderByRelevanceFieldEnum | ScreenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ScreenScreen_noTheatre_IdCompoundUniqueInput = {
    screen_no: number
    theatre_Id: number
  }

  export type ScreenCountOrderByAggregateInput = {
    screen_no?: SortOrder
    theatre_Id?: SortOrder
    Screen_name?: SortOrder
    No_of_seats?: SortOrder
    Layout_structure?: SortOrder
  }

  export type ScreenAvgOrderByAggregateInput = {
    screen_no?: SortOrder
    theatre_Id?: SortOrder
    No_of_seats?: SortOrder
  }

  export type ScreenMaxOrderByAggregateInput = {
    screen_no?: SortOrder
    theatre_Id?: SortOrder
    Screen_name?: SortOrder
    No_of_seats?: SortOrder
  }

  export type ScreenMinOrderByAggregateInput = {
    screen_no?: SortOrder
    theatre_Id?: SortOrder
    Screen_name?: SortOrder
    No_of_seats?: SortOrder
  }

  export type ScreenSumOrderByAggregateInput = {
    screen_no?: SortOrder
    theatre_Id?: SortOrder
    No_of_seats?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type Enumshows_Show_dimensionFilter<$PrismaModel = never> = {
    equals?: $Enums.shows_Show_dimension | Enumshows_Show_dimensionFieldRefInput<$PrismaModel>
    in?: $Enums.shows_Show_dimension[]
    notIn?: $Enums.shows_Show_dimension[]
    not?: NestedEnumshows_Show_dimensionFilter<$PrismaModel> | $Enums.shows_Show_dimension
  }

  export type BookingListRelationFilter = {
    every?: bookingWhereInput
    some?: bookingWhereInput
    none?: bookingWhereInput
  }

  export type SeatListRelationFilter = {
    every?: SeatWhereInput
    some?: SeatWhereInput
    none?: SeatWhereInput
  }

  export type ScreenScalarRelationFilter = {
    is?: ScreenWhereInput
    isNot?: ScreenWhereInput
  }

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowCountOrderByAggregateInput = {
    Show_Id?: SortOrder
    Movie_Id?: SortOrder
    Theatre_Id?: SortOrder
    Screen_no?: SortOrder
    Show_date?: SortOrder
    Start_time?: SortOrder
    Show_dimension?: SortOrder
  }

  export type ShowAvgOrderByAggregateInput = {
    Show_Id?: SortOrder
    Movie_Id?: SortOrder
    Theatre_Id?: SortOrder
    Screen_no?: SortOrder
  }

  export type ShowMaxOrderByAggregateInput = {
    Show_Id?: SortOrder
    Movie_Id?: SortOrder
    Theatre_Id?: SortOrder
    Screen_no?: SortOrder
    Show_date?: SortOrder
    Start_time?: SortOrder
    Show_dimension?: SortOrder
  }

  export type ShowMinOrderByAggregateInput = {
    Show_Id?: SortOrder
    Movie_Id?: SortOrder
    Theatre_Id?: SortOrder
    Screen_no?: SortOrder
    Show_date?: SortOrder
    Start_time?: SortOrder
    Show_dimension?: SortOrder
  }

  export type ShowSumOrderByAggregateInput = {
    Show_Id?: SortOrder
    Movie_Id?: SortOrder
    Theatre_Id?: SortOrder
    Screen_no?: SortOrder
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

  export type Enumshows_Show_dimensionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.shows_Show_dimension | Enumshows_Show_dimensionFieldRefInput<$PrismaModel>
    in?: $Enums.shows_Show_dimension[]
    notIn?: $Enums.shows_Show_dimension[]
    not?: NestedEnumshows_Show_dimensionWithAggregatesFilter<$PrismaModel> | $Enums.shows_Show_dimension
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumshows_Show_dimensionFilter<$PrismaModel>
    _max?: NestedEnumshows_Show_dimensionFilter<$PrismaModel>
  }

  export type Enumseats_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.seats_status | Enumseats_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.seats_status[] | null
    notIn?: $Enums.seats_status[] | null
    not?: NestedEnumseats_statusNullableFilter<$PrismaModel> | $Enums.seats_status | null
  }

  export type Booking_seatsListRelationFilter = {
    every?: booking_seatsWhereInput
    some?: booking_seatsWhereInput
    none?: booking_seatsWhereInput
  }

  export type ShowScalarRelationFilter = {
    is?: ShowWhereInput
    isNot?: ShowWhereInput
  }

  export type booking_seatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeatOrderByRelevanceInput = {
    fields: SeatOrderByRelevanceFieldEnum | SeatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SeatCountOrderByAggregateInput = {
    seat_id?: SortOrder
    show_id?: SortOrder
    seat_name?: SortOrder
    seat_type?: SortOrder
    status?: SortOrder
  }

  export type SeatAvgOrderByAggregateInput = {
    seat_id?: SortOrder
    show_id?: SortOrder
  }

  export type SeatMaxOrderByAggregateInput = {
    seat_id?: SortOrder
    show_id?: SortOrder
    seat_name?: SortOrder
    seat_type?: SortOrder
    status?: SortOrder
  }

  export type SeatMinOrderByAggregateInput = {
    seat_id?: SortOrder
    show_id?: SortOrder
    seat_name?: SortOrder
    seat_type?: SortOrder
    status?: SortOrder
  }

  export type SeatSumOrderByAggregateInput = {
    seat_id?: SortOrder
    show_id?: SortOrder
  }

  export type Enumseats_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.seats_status | Enumseats_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.seats_status[] | null
    notIn?: $Enums.seats_status[] | null
    not?: NestedEnumseats_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.seats_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumseats_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumseats_statusNullableFilter<$PrismaModel>
  }

  export type MovieNullableScalarRelationFilter = {
    is?: MovieWhereInput | null
    isNot?: MovieWhereInput | null
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    Review_Id?: SortOrder
    movie_Id?: SortOrder
    Rating?: SortOrder
    Comment?: SortOrder
    Reviewed_At?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    Review_Id?: SortOrder
    movie_Id?: SortOrder
    Rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    Review_Id?: SortOrder
    movie_Id?: SortOrder
    Rating?: SortOrder
    Comment?: SortOrder
    Reviewed_At?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    Review_Id?: SortOrder
    movie_Id?: SortOrder
    Rating?: SortOrder
    Comment?: SortOrder
    Reviewed_At?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    Review_Id?: SortOrder
    movie_Id?: SortOrder
    Rating?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: customerWhereInput | null
    isNot?: customerWhereInput | null
  }

  export type ShowNullableScalarRelationFilter = {
    is?: ShowWhereInput | null
    isNot?: ShowWhereInput | null
  }

  export type bookingOrderByRelevanceInput = {
    fields: bookingOrderByRelevanceFieldEnum | bookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bookingCountOrderByAggregateInput = {
    booking_Id?: SortOrder
    customer_Id?: SortOrder
    show_id?: SortOrder
    Amount?: SortOrder
    Payment_method?: SortOrder
    Status?: SortOrder
    payment_time?: SortOrder
  }

  export type bookingAvgOrderByAggregateInput = {
    booking_Id?: SortOrder
    customer_Id?: SortOrder
    show_id?: SortOrder
    Amount?: SortOrder
  }

  export type bookingMaxOrderByAggregateInput = {
    booking_Id?: SortOrder
    customer_Id?: SortOrder
    show_id?: SortOrder
    Amount?: SortOrder
    Payment_method?: SortOrder
    Status?: SortOrder
    payment_time?: SortOrder
  }

  export type bookingMinOrderByAggregateInput = {
    booking_Id?: SortOrder
    customer_Id?: SortOrder
    show_id?: SortOrder
    Amount?: SortOrder
    Payment_method?: SortOrder
    Status?: SortOrder
    payment_time?: SortOrder
  }

  export type bookingSumOrderByAggregateInput = {
    booking_Id?: SortOrder
    customer_Id?: SortOrder
    show_id?: SortOrder
    Amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BookingNullableScalarRelationFilter = {
    is?: bookingWhereInput | null
    isNot?: bookingWhereInput | null
  }

  export type SeatNullableScalarRelationFilter = {
    is?: SeatWhereInput | null
    isNot?: SeatWhereInput | null
  }

  export type booking_seatsBooking_IdSeat_idCompoundUniqueInput = {
    booking_Id: number
    seat_id: number
  }

  export type booking_seatsCountOrderByAggregateInput = {
    booking_seat_id?: SortOrder
    booking_Id?: SortOrder
    seat_id?: SortOrder
  }

  export type booking_seatsAvgOrderByAggregateInput = {
    booking_seat_id?: SortOrder
    booking_Id?: SortOrder
    seat_id?: SortOrder
  }

  export type booking_seatsMaxOrderByAggregateInput = {
    booking_seat_id?: SortOrder
    booking_Id?: SortOrder
    seat_id?: SortOrder
  }

  export type booking_seatsMinOrderByAggregateInput = {
    booking_seat_id?: SortOrder
    booking_Id?: SortOrder
    seat_id?: SortOrder
  }

  export type booking_seatsSumOrderByAggregateInput = {
    booking_seat_id?: SortOrder
    booking_Id?: SortOrder
    seat_id?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type customerOrderByRelevanceInput = {
    fields: customerOrderByRelevanceFieldEnum | customerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type customerCountOrderByAggregateInput = {
    customer_Id?: SortOrder
    F_Name?: SortOrder
    L_Name?: SortOrder
    Email?: SortOrder
    Phone_No?: SortOrder
    Password?: SortOrder
    Created_at?: SortOrder
  }

  export type customerAvgOrderByAggregateInput = {
    customer_Id?: SortOrder
    Phone_No?: SortOrder
  }

  export type customerMaxOrderByAggregateInput = {
    customer_Id?: SortOrder
    F_Name?: SortOrder
    L_Name?: SortOrder
    Email?: SortOrder
    Phone_No?: SortOrder
    Password?: SortOrder
    Created_at?: SortOrder
  }

  export type customerMinOrderByAggregateInput = {
    customer_Id?: SortOrder
    F_Name?: SortOrder
    L_Name?: SortOrder
    Email?: SortOrder
    Phone_No?: SortOrder
    Password?: SortOrder
    Created_at?: SortOrder
  }

  export type customerSumOrderByAggregateInput = {
    customer_Id?: SortOrder
    Phone_No?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type ScreenListRelationFilter = {
    every?: ScreenWhereInput
    some?: ScreenWhereInput
    none?: ScreenWhereInput
  }

  export type ScreenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type theatreOrderByRelevanceInput = {
    fields: theatreOrderByRelevanceFieldEnum | theatreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type theatreCountOrderByAggregateInput = {
    theatre_Id?: SortOrder
    Name?: SortOrder
    Total_no_of_screens?: SortOrder
    Address_Pincode?: SortOrder
    Address_City?: SortOrder
    Address_Area?: SortOrder
    Address_Landmark?: SortOrder
    Address_BuildingNo?: SortOrder
  }

  export type theatreAvgOrderByAggregateInput = {
    theatre_Id?: SortOrder
    Total_no_of_screens?: SortOrder
  }

  export type theatreMaxOrderByAggregateInput = {
    theatre_Id?: SortOrder
    Name?: SortOrder
    Total_no_of_screens?: SortOrder
    Address_Pincode?: SortOrder
    Address_City?: SortOrder
    Address_Area?: SortOrder
    Address_Landmark?: SortOrder
    Address_BuildingNo?: SortOrder
  }

  export type theatreMinOrderByAggregateInput = {
    theatre_Id?: SortOrder
    Name?: SortOrder
    Total_no_of_screens?: SortOrder
    Address_Pincode?: SortOrder
    Address_City?: SortOrder
    Address_Area?: SortOrder
    Address_Landmark?: SortOrder
    Address_BuildingNo?: SortOrder
  }

  export type theatreSumOrderByAggregateInput = {
    theatre_Id?: SortOrder
    Total_no_of_screens?: SortOrder
  }

  export type Movie_ActorCreateNestedManyWithoutMoviesInput = {
    create?: XOR<Movie_ActorCreateWithoutMoviesInput, Movie_ActorUncheckedCreateWithoutMoviesInput> | Movie_ActorCreateWithoutMoviesInput[] | Movie_ActorUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Movie_ActorCreateOrConnectWithoutMoviesInput | Movie_ActorCreateOrConnectWithoutMoviesInput[]
    createMany?: Movie_ActorCreateManyMoviesInputEnvelope
    connect?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutMoviesInput = {
    create?: XOR<ReviewCreateWithoutMoviesInput, ReviewUncheckedCreateWithoutMoviesInput> | ReviewCreateWithoutMoviesInput[] | ReviewUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMoviesInput | ReviewCreateOrConnectWithoutMoviesInput[]
    createMany?: ReviewCreateManyMoviesInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ShowCreateNestedManyWithoutMovieInput = {
    create?: XOR<ShowCreateWithoutMovieInput, ShowUncheckedCreateWithoutMovieInput> | ShowCreateWithoutMovieInput[] | ShowUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutMovieInput | ShowCreateOrConnectWithoutMovieInput[]
    createMany?: ShowCreateManyMovieInputEnvelope
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type Movie_ActorUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<Movie_ActorCreateWithoutMoviesInput, Movie_ActorUncheckedCreateWithoutMoviesInput> | Movie_ActorCreateWithoutMoviesInput[] | Movie_ActorUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Movie_ActorCreateOrConnectWithoutMoviesInput | Movie_ActorCreateOrConnectWithoutMoviesInput[]
    createMany?: Movie_ActorCreateManyMoviesInputEnvelope
    connect?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<ReviewCreateWithoutMoviesInput, ReviewUncheckedCreateWithoutMoviesInput> | ReviewCreateWithoutMoviesInput[] | ReviewUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMoviesInput | ReviewCreateOrConnectWithoutMoviesInput[]
    createMany?: ReviewCreateManyMoviesInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ShowUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<ShowCreateWithoutMovieInput, ShowUncheckedCreateWithoutMovieInput> | ShowCreateWithoutMovieInput[] | ShowUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutMovieInput | ShowCreateOrConnectWithoutMovieInput[]
    createMany?: ShowCreateManyMovieInputEnvelope
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Movie_ActorUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<Movie_ActorCreateWithoutMoviesInput, Movie_ActorUncheckedCreateWithoutMoviesInput> | Movie_ActorCreateWithoutMoviesInput[] | Movie_ActorUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Movie_ActorCreateOrConnectWithoutMoviesInput | Movie_ActorCreateOrConnectWithoutMoviesInput[]
    upsert?: Movie_ActorUpsertWithWhereUniqueWithoutMoviesInput | Movie_ActorUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: Movie_ActorCreateManyMoviesInputEnvelope
    set?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    disconnect?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    delete?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    connect?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    update?: Movie_ActorUpdateWithWhereUniqueWithoutMoviesInput | Movie_ActorUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: Movie_ActorUpdateManyWithWhereWithoutMoviesInput | Movie_ActorUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: Movie_ActorScalarWhereInput | Movie_ActorScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<ReviewCreateWithoutMoviesInput, ReviewUncheckedCreateWithoutMoviesInput> | ReviewCreateWithoutMoviesInput[] | ReviewUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMoviesInput | ReviewCreateOrConnectWithoutMoviesInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMoviesInput | ReviewUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: ReviewCreateManyMoviesInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMoviesInput | ReviewUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMoviesInput | ReviewUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ShowUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ShowCreateWithoutMovieInput, ShowUncheckedCreateWithoutMovieInput> | ShowCreateWithoutMovieInput[] | ShowUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutMovieInput | ShowCreateOrConnectWithoutMovieInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutMovieInput | ShowUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ShowCreateManyMovieInputEnvelope
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutMovieInput | ShowUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutMovieInput | ShowUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Movie_ActorUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<Movie_ActorCreateWithoutMoviesInput, Movie_ActorUncheckedCreateWithoutMoviesInput> | Movie_ActorCreateWithoutMoviesInput[] | Movie_ActorUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Movie_ActorCreateOrConnectWithoutMoviesInput | Movie_ActorCreateOrConnectWithoutMoviesInput[]
    upsert?: Movie_ActorUpsertWithWhereUniqueWithoutMoviesInput | Movie_ActorUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: Movie_ActorCreateManyMoviesInputEnvelope
    set?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    disconnect?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    delete?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    connect?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    update?: Movie_ActorUpdateWithWhereUniqueWithoutMoviesInput | Movie_ActorUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: Movie_ActorUpdateManyWithWhereWithoutMoviesInput | Movie_ActorUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: Movie_ActorScalarWhereInput | Movie_ActorScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<ReviewCreateWithoutMoviesInput, ReviewUncheckedCreateWithoutMoviesInput> | ReviewCreateWithoutMoviesInput[] | ReviewUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMoviesInput | ReviewCreateOrConnectWithoutMoviesInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMoviesInput | ReviewUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: ReviewCreateManyMoviesInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMoviesInput | ReviewUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMoviesInput | ReviewUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ShowUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ShowCreateWithoutMovieInput, ShowUncheckedCreateWithoutMovieInput> | ShowCreateWithoutMovieInput[] | ShowUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutMovieInput | ShowCreateOrConnectWithoutMovieInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutMovieInput | ShowUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ShowCreateManyMovieInputEnvelope
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutMovieInput | ShowUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutMovieInput | ShowUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type Movie_ActorCreateNestedManyWithoutActorInput = {
    create?: XOR<Movie_ActorCreateWithoutActorInput, Movie_ActorUncheckedCreateWithoutActorInput> | Movie_ActorCreateWithoutActorInput[] | Movie_ActorUncheckedCreateWithoutActorInput[]
    connectOrCreate?: Movie_ActorCreateOrConnectWithoutActorInput | Movie_ActorCreateOrConnectWithoutActorInput[]
    createMany?: Movie_ActorCreateManyActorInputEnvelope
    connect?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
  }

  export type Movie_ActorUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<Movie_ActorCreateWithoutActorInput, Movie_ActorUncheckedCreateWithoutActorInput> | Movie_ActorCreateWithoutActorInput[] | Movie_ActorUncheckedCreateWithoutActorInput[]
    connectOrCreate?: Movie_ActorCreateOrConnectWithoutActorInput | Movie_ActorCreateOrConnectWithoutActorInput[]
    createMany?: Movie_ActorCreateManyActorInputEnvelope
    connect?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
  }

  export type Movie_ActorUpdateManyWithoutActorNestedInput = {
    create?: XOR<Movie_ActorCreateWithoutActorInput, Movie_ActorUncheckedCreateWithoutActorInput> | Movie_ActorCreateWithoutActorInput[] | Movie_ActorUncheckedCreateWithoutActorInput[]
    connectOrCreate?: Movie_ActorCreateOrConnectWithoutActorInput | Movie_ActorCreateOrConnectWithoutActorInput[]
    upsert?: Movie_ActorUpsertWithWhereUniqueWithoutActorInput | Movie_ActorUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: Movie_ActorCreateManyActorInputEnvelope
    set?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    disconnect?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    delete?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    connect?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    update?: Movie_ActorUpdateWithWhereUniqueWithoutActorInput | Movie_ActorUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: Movie_ActorUpdateManyWithWhereWithoutActorInput | Movie_ActorUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: Movie_ActorScalarWhereInput | Movie_ActorScalarWhereInput[]
  }

  export type Movie_ActorUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<Movie_ActorCreateWithoutActorInput, Movie_ActorUncheckedCreateWithoutActorInput> | Movie_ActorCreateWithoutActorInput[] | Movie_ActorUncheckedCreateWithoutActorInput[]
    connectOrCreate?: Movie_ActorCreateOrConnectWithoutActorInput | Movie_ActorCreateOrConnectWithoutActorInput[]
    upsert?: Movie_ActorUpsertWithWhereUniqueWithoutActorInput | Movie_ActorUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: Movie_ActorCreateManyActorInputEnvelope
    set?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    disconnect?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    delete?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    connect?: Movie_ActorWhereUniqueInput | Movie_ActorWhereUniqueInput[]
    update?: Movie_ActorUpdateWithWhereUniqueWithoutActorInput | Movie_ActorUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: Movie_ActorUpdateManyWithWhereWithoutActorInput | Movie_ActorUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: Movie_ActorScalarWhereInput | Movie_ActorScalarWhereInput[]
  }

  export type MovieCreateNestedOneWithoutMovie_actorsInput = {
    create?: XOR<MovieCreateWithoutMovie_actorsInput, MovieUncheckedCreateWithoutMovie_actorsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovie_actorsInput
    connect?: MovieWhereUniqueInput
  }

  export type ActorCreateNestedOneWithoutMovie_actorsInput = {
    create?: XOR<ActorCreateWithoutMovie_actorsInput, ActorUncheckedCreateWithoutMovie_actorsInput>
    connectOrCreate?: ActorCreateOrConnectWithoutMovie_actorsInput
    connect?: ActorWhereUniqueInput
  }

  export type MovieUpdateOneRequiredWithoutMovie_actorsNestedInput = {
    create?: XOR<MovieCreateWithoutMovie_actorsInput, MovieUncheckedCreateWithoutMovie_actorsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovie_actorsInput
    upsert?: MovieUpsertWithoutMovie_actorsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutMovie_actorsInput, MovieUpdateWithoutMovie_actorsInput>, MovieUncheckedUpdateWithoutMovie_actorsInput>
  }

  export type ActorUpdateOneRequiredWithoutMovie_actorsNestedInput = {
    create?: XOR<ActorCreateWithoutMovie_actorsInput, ActorUncheckedCreateWithoutMovie_actorsInput>
    connectOrCreate?: ActorCreateOrConnectWithoutMovie_actorsInput
    upsert?: ActorUpsertWithoutMovie_actorsInput
    connect?: ActorWhereUniqueInput
    update?: XOR<XOR<ActorUpdateToOneWithWhereWithoutMovie_actorsInput, ActorUpdateWithoutMovie_actorsInput>, ActorUncheckedUpdateWithoutMovie_actorsInput>
  }

  export type theatreCreateNestedOneWithoutScreensInput = {
    create?: XOR<theatreCreateWithoutScreensInput, theatreUncheckedCreateWithoutScreensInput>
    connectOrCreate?: theatreCreateOrConnectWithoutScreensInput
    connect?: theatreWhereUniqueInput
  }

  export type ShowCreateNestedManyWithoutScreensInput = {
    create?: XOR<ShowCreateWithoutScreensInput, ShowUncheckedCreateWithoutScreensInput> | ShowCreateWithoutScreensInput[] | ShowUncheckedCreateWithoutScreensInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutScreensInput | ShowCreateOrConnectWithoutScreensInput[]
    createMany?: ShowCreateManyScreensInputEnvelope
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type ShowUncheckedCreateNestedManyWithoutScreensInput = {
    create?: XOR<ShowCreateWithoutScreensInput, ShowUncheckedCreateWithoutScreensInput> | ShowCreateWithoutScreensInput[] | ShowUncheckedCreateWithoutScreensInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutScreensInput | ShowCreateOrConnectWithoutScreensInput[]
    createMany?: ShowCreateManyScreensInputEnvelope
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type theatreUpdateOneRequiredWithoutScreensNestedInput = {
    create?: XOR<theatreCreateWithoutScreensInput, theatreUncheckedCreateWithoutScreensInput>
    connectOrCreate?: theatreCreateOrConnectWithoutScreensInput
    upsert?: theatreUpsertWithoutScreensInput
    connect?: theatreWhereUniqueInput
    update?: XOR<XOR<theatreUpdateToOneWithWhereWithoutScreensInput, theatreUpdateWithoutScreensInput>, theatreUncheckedUpdateWithoutScreensInput>
  }

  export type ShowUpdateManyWithoutScreensNestedInput = {
    create?: XOR<ShowCreateWithoutScreensInput, ShowUncheckedCreateWithoutScreensInput> | ShowCreateWithoutScreensInput[] | ShowUncheckedCreateWithoutScreensInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutScreensInput | ShowCreateOrConnectWithoutScreensInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutScreensInput | ShowUpsertWithWhereUniqueWithoutScreensInput[]
    createMany?: ShowCreateManyScreensInputEnvelope
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutScreensInput | ShowUpdateWithWhereUniqueWithoutScreensInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutScreensInput | ShowUpdateManyWithWhereWithoutScreensInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type ShowUncheckedUpdateManyWithoutScreensNestedInput = {
    create?: XOR<ShowCreateWithoutScreensInput, ShowUncheckedCreateWithoutScreensInput> | ShowCreateWithoutScreensInput[] | ShowUncheckedCreateWithoutScreensInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutScreensInput | ShowCreateOrConnectWithoutScreensInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutScreensInput | ShowUpsertWithWhereUniqueWithoutScreensInput[]
    createMany?: ShowCreateManyScreensInputEnvelope
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutScreensInput | ShowUpdateWithWhereUniqueWithoutScreensInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutScreensInput | ShowUpdateManyWithWhereWithoutScreensInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type bookingCreateNestedManyWithoutShowsInput = {
    create?: XOR<bookingCreateWithoutShowsInput, bookingUncheckedCreateWithoutShowsInput> | bookingCreateWithoutShowsInput[] | bookingUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutShowsInput | bookingCreateOrConnectWithoutShowsInput[]
    createMany?: bookingCreateManyShowsInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type SeatCreateNestedManyWithoutShowsInput = {
    create?: XOR<SeatCreateWithoutShowsInput, SeatUncheckedCreateWithoutShowsInput> | SeatCreateWithoutShowsInput[] | SeatUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutShowsInput | SeatCreateOrConnectWithoutShowsInput[]
    createMany?: SeatCreateManyShowsInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type MovieCreateNestedOneWithoutShowsInput = {
    create?: XOR<MovieCreateWithoutShowsInput, MovieUncheckedCreateWithoutShowsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutShowsInput
    connect?: MovieWhereUniqueInput
  }

  export type theatreCreateNestedOneWithoutShowsInput = {
    create?: XOR<theatreCreateWithoutShowsInput, theatreUncheckedCreateWithoutShowsInput>
    connectOrCreate?: theatreCreateOrConnectWithoutShowsInput
    connect?: theatreWhereUniqueInput
  }

  export type ScreenCreateNestedOneWithoutShowsInput = {
    create?: XOR<ScreenCreateWithoutShowsInput, ScreenUncheckedCreateWithoutShowsInput>
    connectOrCreate?: ScreenCreateOrConnectWithoutShowsInput
    connect?: ScreenWhereUniqueInput
  }

  export type bookingUncheckedCreateNestedManyWithoutShowsInput = {
    create?: XOR<bookingCreateWithoutShowsInput, bookingUncheckedCreateWithoutShowsInput> | bookingCreateWithoutShowsInput[] | bookingUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutShowsInput | bookingCreateOrConnectWithoutShowsInput[]
    createMany?: bookingCreateManyShowsInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type SeatUncheckedCreateNestedManyWithoutShowsInput = {
    create?: XOR<SeatCreateWithoutShowsInput, SeatUncheckedCreateWithoutShowsInput> | SeatCreateWithoutShowsInput[] | SeatUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutShowsInput | SeatCreateOrConnectWithoutShowsInput[]
    createMany?: SeatCreateManyShowsInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumshows_Show_dimensionFieldUpdateOperationsInput = {
    set?: $Enums.shows_Show_dimension
  }

  export type bookingUpdateManyWithoutShowsNestedInput = {
    create?: XOR<bookingCreateWithoutShowsInput, bookingUncheckedCreateWithoutShowsInput> | bookingCreateWithoutShowsInput[] | bookingUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutShowsInput | bookingCreateOrConnectWithoutShowsInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutShowsInput | bookingUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: bookingCreateManyShowsInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutShowsInput | bookingUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutShowsInput | bookingUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type SeatUpdateManyWithoutShowsNestedInput = {
    create?: XOR<SeatCreateWithoutShowsInput, SeatUncheckedCreateWithoutShowsInput> | SeatCreateWithoutShowsInput[] | SeatUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutShowsInput | SeatCreateOrConnectWithoutShowsInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutShowsInput | SeatUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: SeatCreateManyShowsInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutShowsInput | SeatUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutShowsInput | SeatUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type MovieUpdateOneRequiredWithoutShowsNestedInput = {
    create?: XOR<MovieCreateWithoutShowsInput, MovieUncheckedCreateWithoutShowsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutShowsInput
    upsert?: MovieUpsertWithoutShowsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutShowsInput, MovieUpdateWithoutShowsInput>, MovieUncheckedUpdateWithoutShowsInput>
  }

  export type theatreUpdateOneRequiredWithoutShowsNestedInput = {
    create?: XOR<theatreCreateWithoutShowsInput, theatreUncheckedCreateWithoutShowsInput>
    connectOrCreate?: theatreCreateOrConnectWithoutShowsInput
    upsert?: theatreUpsertWithoutShowsInput
    connect?: theatreWhereUniqueInput
    update?: XOR<XOR<theatreUpdateToOneWithWhereWithoutShowsInput, theatreUpdateWithoutShowsInput>, theatreUncheckedUpdateWithoutShowsInput>
  }

  export type ScreenUpdateOneRequiredWithoutShowsNestedInput = {
    create?: XOR<ScreenCreateWithoutShowsInput, ScreenUncheckedCreateWithoutShowsInput>
    connectOrCreate?: ScreenCreateOrConnectWithoutShowsInput
    upsert?: ScreenUpsertWithoutShowsInput
    connect?: ScreenWhereUniqueInput
    update?: XOR<XOR<ScreenUpdateToOneWithWhereWithoutShowsInput, ScreenUpdateWithoutShowsInput>, ScreenUncheckedUpdateWithoutShowsInput>
  }

  export type bookingUncheckedUpdateManyWithoutShowsNestedInput = {
    create?: XOR<bookingCreateWithoutShowsInput, bookingUncheckedCreateWithoutShowsInput> | bookingCreateWithoutShowsInput[] | bookingUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutShowsInput | bookingCreateOrConnectWithoutShowsInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutShowsInput | bookingUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: bookingCreateManyShowsInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutShowsInput | bookingUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutShowsInput | bookingUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type SeatUncheckedUpdateManyWithoutShowsNestedInput = {
    create?: XOR<SeatCreateWithoutShowsInput, SeatUncheckedCreateWithoutShowsInput> | SeatCreateWithoutShowsInput[] | SeatUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutShowsInput | SeatCreateOrConnectWithoutShowsInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutShowsInput | SeatUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: SeatCreateManyShowsInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutShowsInput | SeatUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutShowsInput | SeatUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type booking_seatsCreateNestedManyWithoutSeatsInput = {
    create?: XOR<booking_seatsCreateWithoutSeatsInput, booking_seatsUncheckedCreateWithoutSeatsInput> | booking_seatsCreateWithoutSeatsInput[] | booking_seatsUncheckedCreateWithoutSeatsInput[]
    connectOrCreate?: booking_seatsCreateOrConnectWithoutSeatsInput | booking_seatsCreateOrConnectWithoutSeatsInput[]
    createMany?: booking_seatsCreateManySeatsInputEnvelope
    connect?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
  }

  export type ShowCreateNestedOneWithoutSeatsInput = {
    create?: XOR<ShowCreateWithoutSeatsInput, ShowUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: ShowCreateOrConnectWithoutSeatsInput
    connect?: ShowWhereUniqueInput
  }

  export type booking_seatsUncheckedCreateNestedManyWithoutSeatsInput = {
    create?: XOR<booking_seatsCreateWithoutSeatsInput, booking_seatsUncheckedCreateWithoutSeatsInput> | booking_seatsCreateWithoutSeatsInput[] | booking_seatsUncheckedCreateWithoutSeatsInput[]
    connectOrCreate?: booking_seatsCreateOrConnectWithoutSeatsInput | booking_seatsCreateOrConnectWithoutSeatsInput[]
    createMany?: booking_seatsCreateManySeatsInputEnvelope
    connect?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
  }

  export type NullableEnumseats_statusFieldUpdateOperationsInput = {
    set?: $Enums.seats_status | null
  }

  export type booking_seatsUpdateManyWithoutSeatsNestedInput = {
    create?: XOR<booking_seatsCreateWithoutSeatsInput, booking_seatsUncheckedCreateWithoutSeatsInput> | booking_seatsCreateWithoutSeatsInput[] | booking_seatsUncheckedCreateWithoutSeatsInput[]
    connectOrCreate?: booking_seatsCreateOrConnectWithoutSeatsInput | booking_seatsCreateOrConnectWithoutSeatsInput[]
    upsert?: booking_seatsUpsertWithWhereUniqueWithoutSeatsInput | booking_seatsUpsertWithWhereUniqueWithoutSeatsInput[]
    createMany?: booking_seatsCreateManySeatsInputEnvelope
    set?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    disconnect?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    delete?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    connect?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    update?: booking_seatsUpdateWithWhereUniqueWithoutSeatsInput | booking_seatsUpdateWithWhereUniqueWithoutSeatsInput[]
    updateMany?: booking_seatsUpdateManyWithWhereWithoutSeatsInput | booking_seatsUpdateManyWithWhereWithoutSeatsInput[]
    deleteMany?: booking_seatsScalarWhereInput | booking_seatsScalarWhereInput[]
  }

  export type ShowUpdateOneRequiredWithoutSeatsNestedInput = {
    create?: XOR<ShowCreateWithoutSeatsInput, ShowUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: ShowCreateOrConnectWithoutSeatsInput
    upsert?: ShowUpsertWithoutSeatsInput
    connect?: ShowWhereUniqueInput
    update?: XOR<XOR<ShowUpdateToOneWithWhereWithoutSeatsInput, ShowUpdateWithoutSeatsInput>, ShowUncheckedUpdateWithoutSeatsInput>
  }

  export type booking_seatsUncheckedUpdateManyWithoutSeatsNestedInput = {
    create?: XOR<booking_seatsCreateWithoutSeatsInput, booking_seatsUncheckedCreateWithoutSeatsInput> | booking_seatsCreateWithoutSeatsInput[] | booking_seatsUncheckedCreateWithoutSeatsInput[]
    connectOrCreate?: booking_seatsCreateOrConnectWithoutSeatsInput | booking_seatsCreateOrConnectWithoutSeatsInput[]
    upsert?: booking_seatsUpsertWithWhereUniqueWithoutSeatsInput | booking_seatsUpsertWithWhereUniqueWithoutSeatsInput[]
    createMany?: booking_seatsCreateManySeatsInputEnvelope
    set?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    disconnect?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    delete?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    connect?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    update?: booking_seatsUpdateWithWhereUniqueWithoutSeatsInput | booking_seatsUpdateWithWhereUniqueWithoutSeatsInput[]
    updateMany?: booking_seatsUpdateManyWithWhereWithoutSeatsInput | booking_seatsUpdateManyWithWhereWithoutSeatsInput[]
    deleteMany?: booking_seatsScalarWhereInput | booking_seatsScalarWhereInput[]
  }

  export type MovieCreateNestedOneWithoutReviewsInput = {
    create?: XOR<MovieCreateWithoutReviewsInput, MovieUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutReviewsInput
    connect?: MovieWhereUniqueInput
  }

  export type MovieUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<MovieCreateWithoutReviewsInput, MovieUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutReviewsInput
    upsert?: MovieUpsertWithoutReviewsInput
    disconnect?: MovieWhereInput | boolean
    delete?: MovieWhereInput | boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutReviewsInput, MovieUpdateWithoutReviewsInput>, MovieUncheckedUpdateWithoutReviewsInput>
  }

  export type customerCreateNestedOneWithoutBookingInput = {
    create?: XOR<customerCreateWithoutBookingInput, customerUncheckedCreateWithoutBookingInput>
    connectOrCreate?: customerCreateOrConnectWithoutBookingInput
    connect?: customerWhereUniqueInput
  }

  export type ShowCreateNestedOneWithoutBookingInput = {
    create?: XOR<ShowCreateWithoutBookingInput, ShowUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ShowCreateOrConnectWithoutBookingInput
    connect?: ShowWhereUniqueInput
  }

  export type booking_seatsCreateNestedManyWithoutBookingInput = {
    create?: XOR<booking_seatsCreateWithoutBookingInput, booking_seatsUncheckedCreateWithoutBookingInput> | booking_seatsCreateWithoutBookingInput[] | booking_seatsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: booking_seatsCreateOrConnectWithoutBookingInput | booking_seatsCreateOrConnectWithoutBookingInput[]
    createMany?: booking_seatsCreateManyBookingInputEnvelope
    connect?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
  }

  export type booking_seatsUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<booking_seatsCreateWithoutBookingInput, booking_seatsUncheckedCreateWithoutBookingInput> | booking_seatsCreateWithoutBookingInput[] | booking_seatsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: booking_seatsCreateOrConnectWithoutBookingInput | booking_seatsCreateOrConnectWithoutBookingInput[]
    createMany?: booking_seatsCreateManyBookingInputEnvelope
    connect?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type customerUpdateOneWithoutBookingNestedInput = {
    create?: XOR<customerCreateWithoutBookingInput, customerUncheckedCreateWithoutBookingInput>
    connectOrCreate?: customerCreateOrConnectWithoutBookingInput
    upsert?: customerUpsertWithoutBookingInput
    disconnect?: customerWhereInput | boolean
    delete?: customerWhereInput | boolean
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutBookingInput, customerUpdateWithoutBookingInput>, customerUncheckedUpdateWithoutBookingInput>
  }

  export type ShowUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ShowCreateWithoutBookingInput, ShowUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ShowCreateOrConnectWithoutBookingInput
    upsert?: ShowUpsertWithoutBookingInput
    disconnect?: ShowWhereInput | boolean
    delete?: ShowWhereInput | boolean
    connect?: ShowWhereUniqueInput
    update?: XOR<XOR<ShowUpdateToOneWithWhereWithoutBookingInput, ShowUpdateWithoutBookingInput>, ShowUncheckedUpdateWithoutBookingInput>
  }

  export type booking_seatsUpdateManyWithoutBookingNestedInput = {
    create?: XOR<booking_seatsCreateWithoutBookingInput, booking_seatsUncheckedCreateWithoutBookingInput> | booking_seatsCreateWithoutBookingInput[] | booking_seatsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: booking_seatsCreateOrConnectWithoutBookingInput | booking_seatsCreateOrConnectWithoutBookingInput[]
    upsert?: booking_seatsUpsertWithWhereUniqueWithoutBookingInput | booking_seatsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: booking_seatsCreateManyBookingInputEnvelope
    set?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    disconnect?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    delete?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    connect?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    update?: booking_seatsUpdateWithWhereUniqueWithoutBookingInput | booking_seatsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: booking_seatsUpdateManyWithWhereWithoutBookingInput | booking_seatsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: booking_seatsScalarWhereInput | booking_seatsScalarWhereInput[]
  }

  export type booking_seatsUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<booking_seatsCreateWithoutBookingInput, booking_seatsUncheckedCreateWithoutBookingInput> | booking_seatsCreateWithoutBookingInput[] | booking_seatsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: booking_seatsCreateOrConnectWithoutBookingInput | booking_seatsCreateOrConnectWithoutBookingInput[]
    upsert?: booking_seatsUpsertWithWhereUniqueWithoutBookingInput | booking_seatsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: booking_seatsCreateManyBookingInputEnvelope
    set?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    disconnect?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    delete?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    connect?: booking_seatsWhereUniqueInput | booking_seatsWhereUniqueInput[]
    update?: booking_seatsUpdateWithWhereUniqueWithoutBookingInput | booking_seatsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: booking_seatsUpdateManyWithWhereWithoutBookingInput | booking_seatsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: booking_seatsScalarWhereInput | booking_seatsScalarWhereInput[]
  }

  export type bookingCreateNestedOneWithoutBooking_seatsInput = {
    create?: XOR<bookingCreateWithoutBooking_seatsInput, bookingUncheckedCreateWithoutBooking_seatsInput>
    connectOrCreate?: bookingCreateOrConnectWithoutBooking_seatsInput
    connect?: bookingWhereUniqueInput
  }

  export type SeatCreateNestedOneWithoutBooking_seatsInput = {
    create?: XOR<SeatCreateWithoutBooking_seatsInput, SeatUncheckedCreateWithoutBooking_seatsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutBooking_seatsInput
    connect?: SeatWhereUniqueInput
  }

  export type bookingUpdateOneWithoutBooking_seatsNestedInput = {
    create?: XOR<bookingCreateWithoutBooking_seatsInput, bookingUncheckedCreateWithoutBooking_seatsInput>
    connectOrCreate?: bookingCreateOrConnectWithoutBooking_seatsInput
    upsert?: bookingUpsertWithoutBooking_seatsInput
    disconnect?: bookingWhereInput | boolean
    delete?: bookingWhereInput | boolean
    connect?: bookingWhereUniqueInput
    update?: XOR<XOR<bookingUpdateToOneWithWhereWithoutBooking_seatsInput, bookingUpdateWithoutBooking_seatsInput>, bookingUncheckedUpdateWithoutBooking_seatsInput>
  }

  export type SeatUpdateOneWithoutBooking_seatsNestedInput = {
    create?: XOR<SeatCreateWithoutBooking_seatsInput, SeatUncheckedCreateWithoutBooking_seatsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutBooking_seatsInput
    upsert?: SeatUpsertWithoutBooking_seatsInput
    disconnect?: SeatWhereInput | boolean
    delete?: SeatWhereInput | boolean
    connect?: SeatWhereUniqueInput
    update?: XOR<XOR<SeatUpdateToOneWithWhereWithoutBooking_seatsInput, SeatUpdateWithoutBooking_seatsInput>, SeatUncheckedUpdateWithoutBooking_seatsInput>
  }

  export type bookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<bookingCreateWithoutCustomerInput, bookingUncheckedCreateWithoutCustomerInput> | bookingCreateWithoutCustomerInput[] | bookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutCustomerInput | bookingCreateOrConnectWithoutCustomerInput[]
    createMany?: bookingCreateManyCustomerInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<bookingCreateWithoutCustomerInput, bookingUncheckedCreateWithoutCustomerInput> | bookingCreateWithoutCustomerInput[] | bookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutCustomerInput | bookingCreateOrConnectWithoutCustomerInput[]
    createMany?: bookingCreateManyCustomerInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type bookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<bookingCreateWithoutCustomerInput, bookingUncheckedCreateWithoutCustomerInput> | bookingCreateWithoutCustomerInput[] | bookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutCustomerInput | bookingCreateOrConnectWithoutCustomerInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutCustomerInput | bookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: bookingCreateManyCustomerInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutCustomerInput | bookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutCustomerInput | bookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<bookingCreateWithoutCustomerInput, bookingUncheckedCreateWithoutCustomerInput> | bookingCreateWithoutCustomerInput[] | bookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutCustomerInput | bookingCreateOrConnectWithoutCustomerInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutCustomerInput | bookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: bookingCreateManyCustomerInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutCustomerInput | bookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutCustomerInput | bookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type ScreenCreateNestedManyWithoutTheatreInput = {
    create?: XOR<ScreenCreateWithoutTheatreInput, ScreenUncheckedCreateWithoutTheatreInput> | ScreenCreateWithoutTheatreInput[] | ScreenUncheckedCreateWithoutTheatreInput[]
    connectOrCreate?: ScreenCreateOrConnectWithoutTheatreInput | ScreenCreateOrConnectWithoutTheatreInput[]
    createMany?: ScreenCreateManyTheatreInputEnvelope
    connect?: ScreenWhereUniqueInput | ScreenWhereUniqueInput[]
  }

  export type ShowCreateNestedManyWithoutTheatreInput = {
    create?: XOR<ShowCreateWithoutTheatreInput, ShowUncheckedCreateWithoutTheatreInput> | ShowCreateWithoutTheatreInput[] | ShowUncheckedCreateWithoutTheatreInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutTheatreInput | ShowCreateOrConnectWithoutTheatreInput[]
    createMany?: ShowCreateManyTheatreInputEnvelope
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type ScreenUncheckedCreateNestedManyWithoutTheatreInput = {
    create?: XOR<ScreenCreateWithoutTheatreInput, ScreenUncheckedCreateWithoutTheatreInput> | ScreenCreateWithoutTheatreInput[] | ScreenUncheckedCreateWithoutTheatreInput[]
    connectOrCreate?: ScreenCreateOrConnectWithoutTheatreInput | ScreenCreateOrConnectWithoutTheatreInput[]
    createMany?: ScreenCreateManyTheatreInputEnvelope
    connect?: ScreenWhereUniqueInput | ScreenWhereUniqueInput[]
  }

  export type ShowUncheckedCreateNestedManyWithoutTheatreInput = {
    create?: XOR<ShowCreateWithoutTheatreInput, ShowUncheckedCreateWithoutTheatreInput> | ShowCreateWithoutTheatreInput[] | ShowUncheckedCreateWithoutTheatreInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutTheatreInput | ShowCreateOrConnectWithoutTheatreInput[]
    createMany?: ShowCreateManyTheatreInputEnvelope
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
  }

  export type ScreenUpdateManyWithoutTheatreNestedInput = {
    create?: XOR<ScreenCreateWithoutTheatreInput, ScreenUncheckedCreateWithoutTheatreInput> | ScreenCreateWithoutTheatreInput[] | ScreenUncheckedCreateWithoutTheatreInput[]
    connectOrCreate?: ScreenCreateOrConnectWithoutTheatreInput | ScreenCreateOrConnectWithoutTheatreInput[]
    upsert?: ScreenUpsertWithWhereUniqueWithoutTheatreInput | ScreenUpsertWithWhereUniqueWithoutTheatreInput[]
    createMany?: ScreenCreateManyTheatreInputEnvelope
    set?: ScreenWhereUniqueInput | ScreenWhereUniqueInput[]
    disconnect?: ScreenWhereUniqueInput | ScreenWhereUniqueInput[]
    delete?: ScreenWhereUniqueInput | ScreenWhereUniqueInput[]
    connect?: ScreenWhereUniqueInput | ScreenWhereUniqueInput[]
    update?: ScreenUpdateWithWhereUniqueWithoutTheatreInput | ScreenUpdateWithWhereUniqueWithoutTheatreInput[]
    updateMany?: ScreenUpdateManyWithWhereWithoutTheatreInput | ScreenUpdateManyWithWhereWithoutTheatreInput[]
    deleteMany?: ScreenScalarWhereInput | ScreenScalarWhereInput[]
  }

  export type ShowUpdateManyWithoutTheatreNestedInput = {
    create?: XOR<ShowCreateWithoutTheatreInput, ShowUncheckedCreateWithoutTheatreInput> | ShowCreateWithoutTheatreInput[] | ShowUncheckedCreateWithoutTheatreInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutTheatreInput | ShowCreateOrConnectWithoutTheatreInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutTheatreInput | ShowUpsertWithWhereUniqueWithoutTheatreInput[]
    createMany?: ShowCreateManyTheatreInputEnvelope
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutTheatreInput | ShowUpdateWithWhereUniqueWithoutTheatreInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutTheatreInput | ShowUpdateManyWithWhereWithoutTheatreInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
  }

  export type ScreenUncheckedUpdateManyWithoutTheatreNestedInput = {
    create?: XOR<ScreenCreateWithoutTheatreInput, ScreenUncheckedCreateWithoutTheatreInput> | ScreenCreateWithoutTheatreInput[] | ScreenUncheckedCreateWithoutTheatreInput[]
    connectOrCreate?: ScreenCreateOrConnectWithoutTheatreInput | ScreenCreateOrConnectWithoutTheatreInput[]
    upsert?: ScreenUpsertWithWhereUniqueWithoutTheatreInput | ScreenUpsertWithWhereUniqueWithoutTheatreInput[]
    createMany?: ScreenCreateManyTheatreInputEnvelope
    set?: ScreenWhereUniqueInput | ScreenWhereUniqueInput[]
    disconnect?: ScreenWhereUniqueInput | ScreenWhereUniqueInput[]
    delete?: ScreenWhereUniqueInput | ScreenWhereUniqueInput[]
    connect?: ScreenWhereUniqueInput | ScreenWhereUniqueInput[]
    update?: ScreenUpdateWithWhereUniqueWithoutTheatreInput | ScreenUpdateWithWhereUniqueWithoutTheatreInput[]
    updateMany?: ScreenUpdateManyWithWhereWithoutTheatreInput | ScreenUpdateManyWithWhereWithoutTheatreInput[]
    deleteMany?: ScreenScalarWhereInput | ScreenScalarWhereInput[]
  }

  export type ShowUncheckedUpdateManyWithoutTheatreNestedInput = {
    create?: XOR<ShowCreateWithoutTheatreInput, ShowUncheckedCreateWithoutTheatreInput> | ShowCreateWithoutTheatreInput[] | ShowUncheckedCreateWithoutTheatreInput[]
    connectOrCreate?: ShowCreateOrConnectWithoutTheatreInput | ShowCreateOrConnectWithoutTheatreInput[]
    upsert?: ShowUpsertWithWhereUniqueWithoutTheatreInput | ShowUpsertWithWhereUniqueWithoutTheatreInput[]
    createMany?: ShowCreateManyTheatreInputEnvelope
    set?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    disconnect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    delete?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    connect?: ShowWhereUniqueInput | ShowWhereUniqueInput[]
    update?: ShowUpdateWithWhereUniqueWithoutTheatreInput | ShowUpdateWithWhereUniqueWithoutTheatreInput[]
    updateMany?: ShowUpdateManyWithWhereWithoutTheatreInput | ShowUpdateManyWithWhereWithoutTheatreInput[]
    deleteMany?: ShowScalarWhereInput | ShowScalarWhereInput[]
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumshows_Show_dimensionFilter<$PrismaModel = never> = {
    equals?: $Enums.shows_Show_dimension | Enumshows_Show_dimensionFieldRefInput<$PrismaModel>
    in?: $Enums.shows_Show_dimension[]
    notIn?: $Enums.shows_Show_dimension[]
    not?: NestedEnumshows_Show_dimensionFilter<$PrismaModel> | $Enums.shows_Show_dimension
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

  export type NestedEnumshows_Show_dimensionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.shows_Show_dimension | Enumshows_Show_dimensionFieldRefInput<$PrismaModel>
    in?: $Enums.shows_Show_dimension[]
    notIn?: $Enums.shows_Show_dimension[]
    not?: NestedEnumshows_Show_dimensionWithAggregatesFilter<$PrismaModel> | $Enums.shows_Show_dimension
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumshows_Show_dimensionFilter<$PrismaModel>
    _max?: NestedEnumshows_Show_dimensionFilter<$PrismaModel>
  }

  export type NestedEnumseats_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.seats_status | Enumseats_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.seats_status[] | null
    notIn?: $Enums.seats_status[] | null
    not?: NestedEnumseats_statusNullableFilter<$PrismaModel> | $Enums.seats_status | null
  }

  export type NestedEnumseats_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.seats_status | Enumseats_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.seats_status[] | null
    notIn?: $Enums.seats_status[] | null
    not?: NestedEnumseats_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.seats_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumseats_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumseats_statusNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type Movie_ActorCreateWithoutMoviesInput = {
    Role_Name?: string | null
    actor: ActorCreateNestedOneWithoutMovie_actorsInput
  }

  export type Movie_ActorUncheckedCreateWithoutMoviesInput = {
    Actor_Id: number
    Role_Name?: string | null
  }

  export type Movie_ActorCreateOrConnectWithoutMoviesInput = {
    where: Movie_ActorWhereUniqueInput
    create: XOR<Movie_ActorCreateWithoutMoviesInput, Movie_ActorUncheckedCreateWithoutMoviesInput>
  }

  export type Movie_ActorCreateManyMoviesInputEnvelope = {
    data: Movie_ActorCreateManyMoviesInput | Movie_ActorCreateManyMoviesInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutMoviesInput = {
    Rating?: number | null
    Comment?: string | null
    Reviewed_At?: Date | string | null
  }

  export type ReviewUncheckedCreateWithoutMoviesInput = {
    Review_Id?: number
    Rating?: number | null
    Comment?: string | null
    Reviewed_At?: Date | string | null
  }

  export type ReviewCreateOrConnectWithoutMoviesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutMoviesInput, ReviewUncheckedCreateWithoutMoviesInput>
  }

  export type ReviewCreateManyMoviesInputEnvelope = {
    data: ReviewCreateManyMoviesInput | ReviewCreateManyMoviesInput[]
    skipDuplicates?: boolean
  }

  export type ShowCreateWithoutMovieInput = {
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
    booking?: bookingCreateNestedManyWithoutShowsInput
    seats?: SeatCreateNestedManyWithoutShowsInput
    theatre: theatreCreateNestedOneWithoutShowsInput
    screens: ScreenCreateNestedOneWithoutShowsInput
  }

  export type ShowUncheckedCreateWithoutMovieInput = {
    Show_Id?: number
    Theatre_Id: number
    Screen_no: number
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
    booking?: bookingUncheckedCreateNestedManyWithoutShowsInput
    seats?: SeatUncheckedCreateNestedManyWithoutShowsInput
  }

  export type ShowCreateOrConnectWithoutMovieInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutMovieInput, ShowUncheckedCreateWithoutMovieInput>
  }

  export type ShowCreateManyMovieInputEnvelope = {
    data: ShowCreateManyMovieInput | ShowCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type Movie_ActorUpsertWithWhereUniqueWithoutMoviesInput = {
    where: Movie_ActorWhereUniqueInput
    update: XOR<Movie_ActorUpdateWithoutMoviesInput, Movie_ActorUncheckedUpdateWithoutMoviesInput>
    create: XOR<Movie_ActorCreateWithoutMoviesInput, Movie_ActorUncheckedCreateWithoutMoviesInput>
  }

  export type Movie_ActorUpdateWithWhereUniqueWithoutMoviesInput = {
    where: Movie_ActorWhereUniqueInput
    data: XOR<Movie_ActorUpdateWithoutMoviesInput, Movie_ActorUncheckedUpdateWithoutMoviesInput>
  }

  export type Movie_ActorUpdateManyWithWhereWithoutMoviesInput = {
    where: Movie_ActorScalarWhereInput
    data: XOR<Movie_ActorUpdateManyMutationInput, Movie_ActorUncheckedUpdateManyWithoutMoviesInput>
  }

  export type Movie_ActorScalarWhereInput = {
    AND?: Movie_ActorScalarWhereInput | Movie_ActorScalarWhereInput[]
    OR?: Movie_ActorScalarWhereInput[]
    NOT?: Movie_ActorScalarWhereInput | Movie_ActorScalarWhereInput[]
    movie_Id?: IntFilter<"Movie_Actor"> | number
    Actor_Id?: IntFilter<"Movie_Actor"> | number
    Role_Name?: StringNullableFilter<"Movie_Actor"> | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutMoviesInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutMoviesInput, ReviewUncheckedUpdateWithoutMoviesInput>
    create: XOR<ReviewCreateWithoutMoviesInput, ReviewUncheckedCreateWithoutMoviesInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutMoviesInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutMoviesInput, ReviewUncheckedUpdateWithoutMoviesInput>
  }

  export type ReviewUpdateManyWithWhereWithoutMoviesInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutMoviesInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    Review_Id?: IntFilter<"Review"> | number
    movie_Id?: IntNullableFilter<"Review"> | number | null
    Rating?: IntNullableFilter<"Review"> | number | null
    Comment?: StringNullableFilter<"Review"> | string | null
    Reviewed_At?: DateTimeNullableFilter<"Review"> | Date | string | null
  }

  export type ShowUpsertWithWhereUniqueWithoutMovieInput = {
    where: ShowWhereUniqueInput
    update: XOR<ShowUpdateWithoutMovieInput, ShowUncheckedUpdateWithoutMovieInput>
    create: XOR<ShowCreateWithoutMovieInput, ShowUncheckedCreateWithoutMovieInput>
  }

  export type ShowUpdateWithWhereUniqueWithoutMovieInput = {
    where: ShowWhereUniqueInput
    data: XOR<ShowUpdateWithoutMovieInput, ShowUncheckedUpdateWithoutMovieInput>
  }

  export type ShowUpdateManyWithWhereWithoutMovieInput = {
    where: ShowScalarWhereInput
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyWithoutMovieInput>
  }

  export type ShowScalarWhereInput = {
    AND?: ShowScalarWhereInput | ShowScalarWhereInput[]
    OR?: ShowScalarWhereInput[]
    NOT?: ShowScalarWhereInput | ShowScalarWhereInput[]
    Show_Id?: IntFilter<"Show"> | number
    Movie_Id?: IntFilter<"Show"> | number
    Theatre_Id?: IntFilter<"Show"> | number
    Screen_no?: IntFilter<"Show"> | number
    Show_date?: DateTimeFilter<"Show"> | Date | string
    Start_time?: DateTimeFilter<"Show"> | Date | string
    Show_dimension?: Enumshows_Show_dimensionFilter<"Show"> | $Enums.shows_Show_dimension
  }

  export type Movie_ActorCreateWithoutActorInput = {
    Role_Name?: string | null
    movies: MovieCreateNestedOneWithoutMovie_actorsInput
  }

  export type Movie_ActorUncheckedCreateWithoutActorInput = {
    movie_Id: number
    Role_Name?: string | null
  }

  export type Movie_ActorCreateOrConnectWithoutActorInput = {
    where: Movie_ActorWhereUniqueInput
    create: XOR<Movie_ActorCreateWithoutActorInput, Movie_ActorUncheckedCreateWithoutActorInput>
  }

  export type Movie_ActorCreateManyActorInputEnvelope = {
    data: Movie_ActorCreateManyActorInput | Movie_ActorCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type Movie_ActorUpsertWithWhereUniqueWithoutActorInput = {
    where: Movie_ActorWhereUniqueInput
    update: XOR<Movie_ActorUpdateWithoutActorInput, Movie_ActorUncheckedUpdateWithoutActorInput>
    create: XOR<Movie_ActorCreateWithoutActorInput, Movie_ActorUncheckedCreateWithoutActorInput>
  }

  export type Movie_ActorUpdateWithWhereUniqueWithoutActorInput = {
    where: Movie_ActorWhereUniqueInput
    data: XOR<Movie_ActorUpdateWithoutActorInput, Movie_ActorUncheckedUpdateWithoutActorInput>
  }

  export type Movie_ActorUpdateManyWithWhereWithoutActorInput = {
    where: Movie_ActorScalarWhereInput
    data: XOR<Movie_ActorUpdateManyMutationInput, Movie_ActorUncheckedUpdateManyWithoutActorInput>
  }

  export type MovieCreateWithoutMovie_actorsInput = {
    Title: string
    Genre?: string | null
    Language?: string | null
    Duration?: number | null
    Trailer_URL?: string | null
    Rating?: number | null
    Description?: string | null
    Release_date?: Date | string | null
    Poster_url?: string | null
    reviews?: ReviewCreateNestedManyWithoutMoviesInput
    shows?: ShowCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutMovie_actorsInput = {
    Movie_Id?: number
    Title: string
    Genre?: string | null
    Language?: string | null
    Duration?: number | null
    Trailer_URL?: string | null
    Rating?: number | null
    Description?: string | null
    Release_date?: Date | string | null
    Poster_url?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutMoviesInput
    shows?: ShowUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutMovie_actorsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutMovie_actorsInput, MovieUncheckedCreateWithoutMovie_actorsInput>
  }

  export type ActorCreateWithoutMovie_actorsInput = {
    Name: string
    Created_At?: Date | string | null
    actor_pic?: string | null
  }

  export type ActorUncheckedCreateWithoutMovie_actorsInput = {
    Actor_Id?: number
    Name: string
    Created_At?: Date | string | null
    actor_pic?: string | null
  }

  export type ActorCreateOrConnectWithoutMovie_actorsInput = {
    where: ActorWhereUniqueInput
    create: XOR<ActorCreateWithoutMovie_actorsInput, ActorUncheckedCreateWithoutMovie_actorsInput>
  }

  export type MovieUpsertWithoutMovie_actorsInput = {
    update: XOR<MovieUpdateWithoutMovie_actorsInput, MovieUncheckedUpdateWithoutMovie_actorsInput>
    create: XOR<MovieCreateWithoutMovie_actorsInput, MovieUncheckedCreateWithoutMovie_actorsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutMovie_actorsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutMovie_actorsInput, MovieUncheckedUpdateWithoutMovie_actorsInput>
  }

  export type MovieUpdateWithoutMovie_actorsInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Genre?: NullableStringFieldUpdateOperationsInput | string | null
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    Trailer_URL?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableFloatFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUpdateManyWithoutMoviesNestedInput
    shows?: ShowUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutMovie_actorsInput = {
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Genre?: NullableStringFieldUpdateOperationsInput | string | null
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    Trailer_URL?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableFloatFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutMoviesNestedInput
    shows?: ShowUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type ActorUpsertWithoutMovie_actorsInput = {
    update: XOR<ActorUpdateWithoutMovie_actorsInput, ActorUncheckedUpdateWithoutMovie_actorsInput>
    create: XOR<ActorCreateWithoutMovie_actorsInput, ActorUncheckedCreateWithoutMovie_actorsInput>
    where?: ActorWhereInput
  }

  export type ActorUpdateToOneWithWhereWithoutMovie_actorsInput = {
    where?: ActorWhereInput
    data: XOR<ActorUpdateWithoutMovie_actorsInput, ActorUncheckedUpdateWithoutMovie_actorsInput>
  }

  export type ActorUpdateWithoutMovie_actorsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actor_pic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActorUncheckedUpdateWithoutMovie_actorsInput = {
    Actor_Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actor_pic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type theatreCreateWithoutScreensInput = {
    Name?: string | null
    Total_no_of_screens?: number | null
    Address_Pincode?: string | null
    Address_City?: string | null
    Address_Area?: string | null
    Address_Landmark?: string | null
    Address_BuildingNo?: string | null
    shows?: ShowCreateNestedManyWithoutTheatreInput
  }

  export type theatreUncheckedCreateWithoutScreensInput = {
    theatre_Id?: number
    Name?: string | null
    Total_no_of_screens?: number | null
    Address_Pincode?: string | null
    Address_City?: string | null
    Address_Area?: string | null
    Address_Landmark?: string | null
    Address_BuildingNo?: string | null
    shows?: ShowUncheckedCreateNestedManyWithoutTheatreInput
  }

  export type theatreCreateOrConnectWithoutScreensInput = {
    where: theatreWhereUniqueInput
    create: XOR<theatreCreateWithoutScreensInput, theatreUncheckedCreateWithoutScreensInput>
  }

  export type ShowCreateWithoutScreensInput = {
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
    booking?: bookingCreateNestedManyWithoutShowsInput
    seats?: SeatCreateNestedManyWithoutShowsInput
    movie: MovieCreateNestedOneWithoutShowsInput
    theatre: theatreCreateNestedOneWithoutShowsInput
  }

  export type ShowUncheckedCreateWithoutScreensInput = {
    Show_Id?: number
    Movie_Id: number
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
    booking?: bookingUncheckedCreateNestedManyWithoutShowsInput
    seats?: SeatUncheckedCreateNestedManyWithoutShowsInput
  }

  export type ShowCreateOrConnectWithoutScreensInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutScreensInput, ShowUncheckedCreateWithoutScreensInput>
  }

  export type ShowCreateManyScreensInputEnvelope = {
    data: ShowCreateManyScreensInput | ShowCreateManyScreensInput[]
    skipDuplicates?: boolean
  }

  export type theatreUpsertWithoutScreensInput = {
    update: XOR<theatreUpdateWithoutScreensInput, theatreUncheckedUpdateWithoutScreensInput>
    create: XOR<theatreCreateWithoutScreensInput, theatreUncheckedCreateWithoutScreensInput>
    where?: theatreWhereInput
  }

  export type theatreUpdateToOneWithWhereWithoutScreensInput = {
    where?: theatreWhereInput
    data: XOR<theatreUpdateWithoutScreensInput, theatreUncheckedUpdateWithoutScreensInput>
  }

  export type theatreUpdateWithoutScreensInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Total_no_of_screens?: NullableIntFieldUpdateOperationsInput | number | null
    Address_Pincode?: NullableStringFieldUpdateOperationsInput | string | null
    Address_City?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Area?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Landmark?: NullableStringFieldUpdateOperationsInput | string | null
    Address_BuildingNo?: NullableStringFieldUpdateOperationsInput | string | null
    shows?: ShowUpdateManyWithoutTheatreNestedInput
  }

  export type theatreUncheckedUpdateWithoutScreensInput = {
    theatre_Id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Total_no_of_screens?: NullableIntFieldUpdateOperationsInput | number | null
    Address_Pincode?: NullableStringFieldUpdateOperationsInput | string | null
    Address_City?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Area?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Landmark?: NullableStringFieldUpdateOperationsInput | string | null
    Address_BuildingNo?: NullableStringFieldUpdateOperationsInput | string | null
    shows?: ShowUncheckedUpdateManyWithoutTheatreNestedInput
  }

  export type ShowUpsertWithWhereUniqueWithoutScreensInput = {
    where: ShowWhereUniqueInput
    update: XOR<ShowUpdateWithoutScreensInput, ShowUncheckedUpdateWithoutScreensInput>
    create: XOR<ShowCreateWithoutScreensInput, ShowUncheckedCreateWithoutScreensInput>
  }

  export type ShowUpdateWithWhereUniqueWithoutScreensInput = {
    where: ShowWhereUniqueInput
    data: XOR<ShowUpdateWithoutScreensInput, ShowUncheckedUpdateWithoutScreensInput>
  }

  export type ShowUpdateManyWithWhereWithoutScreensInput = {
    where: ShowScalarWhereInput
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyWithoutScreensInput>
  }

  export type bookingCreateWithoutShowsInput = {
    Amount: Decimal | DecimalJsLike | number | string
    Payment_method?: string | null
    Status?: string
    payment_time?: Date | string | null
    customer?: customerCreateNestedOneWithoutBookingInput
    booking_seats?: booking_seatsCreateNestedManyWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutShowsInput = {
    booking_Id?: number
    customer_Id?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    Payment_method?: string | null
    Status?: string
    payment_time?: Date | string | null
    booking_seats?: booking_seatsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingCreateOrConnectWithoutShowsInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutShowsInput, bookingUncheckedCreateWithoutShowsInput>
  }

  export type bookingCreateManyShowsInputEnvelope = {
    data: bookingCreateManyShowsInput | bookingCreateManyShowsInput[]
    skipDuplicates?: boolean
  }

  export type SeatCreateWithoutShowsInput = {
    seat_name: string
    seat_type?: string | null
    status?: $Enums.seats_status | null
    booking_seats?: booking_seatsCreateNestedManyWithoutSeatsInput
  }

  export type SeatUncheckedCreateWithoutShowsInput = {
    seat_id?: number
    seat_name: string
    seat_type?: string | null
    status?: $Enums.seats_status | null
    booking_seats?: booking_seatsUncheckedCreateNestedManyWithoutSeatsInput
  }

  export type SeatCreateOrConnectWithoutShowsInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutShowsInput, SeatUncheckedCreateWithoutShowsInput>
  }

  export type SeatCreateManyShowsInputEnvelope = {
    data: SeatCreateManyShowsInput | SeatCreateManyShowsInput[]
    skipDuplicates?: boolean
  }

  export type MovieCreateWithoutShowsInput = {
    Title: string
    Genre?: string | null
    Language?: string | null
    Duration?: number | null
    Trailer_URL?: string | null
    Rating?: number | null
    Description?: string | null
    Release_date?: Date | string | null
    Poster_url?: string | null
    movie_actors?: Movie_ActorCreateNestedManyWithoutMoviesInput
    reviews?: ReviewCreateNestedManyWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutShowsInput = {
    Movie_Id?: number
    Title: string
    Genre?: string | null
    Language?: string | null
    Duration?: number | null
    Trailer_URL?: string | null
    Rating?: number | null
    Description?: string | null
    Release_date?: Date | string | null
    Poster_url?: string | null
    movie_actors?: Movie_ActorUncheckedCreateNestedManyWithoutMoviesInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MovieCreateOrConnectWithoutShowsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutShowsInput, MovieUncheckedCreateWithoutShowsInput>
  }

  export type theatreCreateWithoutShowsInput = {
    Name?: string | null
    Total_no_of_screens?: number | null
    Address_Pincode?: string | null
    Address_City?: string | null
    Address_Area?: string | null
    Address_Landmark?: string | null
    Address_BuildingNo?: string | null
    screens?: ScreenCreateNestedManyWithoutTheatreInput
  }

  export type theatreUncheckedCreateWithoutShowsInput = {
    theatre_Id?: number
    Name?: string | null
    Total_no_of_screens?: number | null
    Address_Pincode?: string | null
    Address_City?: string | null
    Address_Area?: string | null
    Address_Landmark?: string | null
    Address_BuildingNo?: string | null
    screens?: ScreenUncheckedCreateNestedManyWithoutTheatreInput
  }

  export type theatreCreateOrConnectWithoutShowsInput = {
    where: theatreWhereUniqueInput
    create: XOR<theatreCreateWithoutShowsInput, theatreUncheckedCreateWithoutShowsInput>
  }

  export type ScreenCreateWithoutShowsInput = {
    screen_no: number
    Screen_name?: string | null
    No_of_seats?: number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
    theatre: theatreCreateNestedOneWithoutScreensInput
  }

  export type ScreenUncheckedCreateWithoutShowsInput = {
    screen_no: number
    theatre_Id: number
    Screen_name?: string | null
    No_of_seats?: number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScreenCreateOrConnectWithoutShowsInput = {
    where: ScreenWhereUniqueInput
    create: XOR<ScreenCreateWithoutShowsInput, ScreenUncheckedCreateWithoutShowsInput>
  }

  export type bookingUpsertWithWhereUniqueWithoutShowsInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutShowsInput, bookingUncheckedUpdateWithoutShowsInput>
    create: XOR<bookingCreateWithoutShowsInput, bookingUncheckedCreateWithoutShowsInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutShowsInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutShowsInput, bookingUncheckedUpdateWithoutShowsInput>
  }

  export type bookingUpdateManyWithWhereWithoutShowsInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutShowsInput>
  }

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[]
    OR?: bookingScalarWhereInput[]
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[]
    booking_Id?: IntFilter<"booking"> | number
    customer_Id?: IntNullableFilter<"booking"> | number | null
    show_id?: IntNullableFilter<"booking"> | number | null
    Amount?: DecimalFilter<"booking"> | Decimal | DecimalJsLike | number | string
    Payment_method?: StringNullableFilter<"booking"> | string | null
    Status?: StringFilter<"booking"> | string
    payment_time?: DateTimeNullableFilter<"booking"> | Date | string | null
  }

  export type SeatUpsertWithWhereUniqueWithoutShowsInput = {
    where: SeatWhereUniqueInput
    update: XOR<SeatUpdateWithoutShowsInput, SeatUncheckedUpdateWithoutShowsInput>
    create: XOR<SeatCreateWithoutShowsInput, SeatUncheckedCreateWithoutShowsInput>
  }

  export type SeatUpdateWithWhereUniqueWithoutShowsInput = {
    where: SeatWhereUniqueInput
    data: XOR<SeatUpdateWithoutShowsInput, SeatUncheckedUpdateWithoutShowsInput>
  }

  export type SeatUpdateManyWithWhereWithoutShowsInput = {
    where: SeatScalarWhereInput
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyWithoutShowsInput>
  }

  export type SeatScalarWhereInput = {
    AND?: SeatScalarWhereInput | SeatScalarWhereInput[]
    OR?: SeatScalarWhereInput[]
    NOT?: SeatScalarWhereInput | SeatScalarWhereInput[]
    seat_id?: IntFilter<"Seat"> | number
    show_id?: IntFilter<"Seat"> | number
    seat_name?: StringFilter<"Seat"> | string
    seat_type?: StringNullableFilter<"Seat"> | string | null
    status?: Enumseats_statusNullableFilter<"Seat"> | $Enums.seats_status | null
  }

  export type MovieUpsertWithoutShowsInput = {
    update: XOR<MovieUpdateWithoutShowsInput, MovieUncheckedUpdateWithoutShowsInput>
    create: XOR<MovieCreateWithoutShowsInput, MovieUncheckedCreateWithoutShowsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutShowsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutShowsInput, MovieUncheckedUpdateWithoutShowsInput>
  }

  export type MovieUpdateWithoutShowsInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Genre?: NullableStringFieldUpdateOperationsInput | string | null
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    Trailer_URL?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableFloatFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    movie_actors?: Movie_ActorUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewUpdateManyWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutShowsInput = {
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Genre?: NullableStringFieldUpdateOperationsInput | string | null
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    Trailer_URL?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableFloatFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    movie_actors?: Movie_ActorUncheckedUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type theatreUpsertWithoutShowsInput = {
    update: XOR<theatreUpdateWithoutShowsInput, theatreUncheckedUpdateWithoutShowsInput>
    create: XOR<theatreCreateWithoutShowsInput, theatreUncheckedCreateWithoutShowsInput>
    where?: theatreWhereInput
  }

  export type theatreUpdateToOneWithWhereWithoutShowsInput = {
    where?: theatreWhereInput
    data: XOR<theatreUpdateWithoutShowsInput, theatreUncheckedUpdateWithoutShowsInput>
  }

  export type theatreUpdateWithoutShowsInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Total_no_of_screens?: NullableIntFieldUpdateOperationsInput | number | null
    Address_Pincode?: NullableStringFieldUpdateOperationsInput | string | null
    Address_City?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Area?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Landmark?: NullableStringFieldUpdateOperationsInput | string | null
    Address_BuildingNo?: NullableStringFieldUpdateOperationsInput | string | null
    screens?: ScreenUpdateManyWithoutTheatreNestedInput
  }

  export type theatreUncheckedUpdateWithoutShowsInput = {
    theatre_Id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Total_no_of_screens?: NullableIntFieldUpdateOperationsInput | number | null
    Address_Pincode?: NullableStringFieldUpdateOperationsInput | string | null
    Address_City?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Area?: NullableStringFieldUpdateOperationsInput | string | null
    Address_Landmark?: NullableStringFieldUpdateOperationsInput | string | null
    Address_BuildingNo?: NullableStringFieldUpdateOperationsInput | string | null
    screens?: ScreenUncheckedUpdateManyWithoutTheatreNestedInput
  }

  export type ScreenUpsertWithoutShowsInput = {
    update: XOR<ScreenUpdateWithoutShowsInput, ScreenUncheckedUpdateWithoutShowsInput>
    create: XOR<ScreenCreateWithoutShowsInput, ScreenUncheckedCreateWithoutShowsInput>
    where?: ScreenWhereInput
  }

  export type ScreenUpdateToOneWithWhereWithoutShowsInput = {
    where?: ScreenWhereInput
    data: XOR<ScreenUpdateWithoutShowsInput, ScreenUncheckedUpdateWithoutShowsInput>
  }

  export type ScreenUpdateWithoutShowsInput = {
    screen_no?: IntFieldUpdateOperationsInput | number
    Screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    No_of_seats?: NullableIntFieldUpdateOperationsInput | number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
    theatre?: theatreUpdateOneRequiredWithoutScreensNestedInput
  }

  export type ScreenUncheckedUpdateWithoutShowsInput = {
    screen_no?: IntFieldUpdateOperationsInput | number
    theatre_Id?: IntFieldUpdateOperationsInput | number
    Screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    No_of_seats?: NullableIntFieldUpdateOperationsInput | number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
  }

  export type booking_seatsCreateWithoutSeatsInput = {
    booking?: bookingCreateNestedOneWithoutBooking_seatsInput
  }

  export type booking_seatsUncheckedCreateWithoutSeatsInput = {
    booking_seat_id?: number
    booking_Id?: number | null
  }

  export type booking_seatsCreateOrConnectWithoutSeatsInput = {
    where: booking_seatsWhereUniqueInput
    create: XOR<booking_seatsCreateWithoutSeatsInput, booking_seatsUncheckedCreateWithoutSeatsInput>
  }

  export type booking_seatsCreateManySeatsInputEnvelope = {
    data: booking_seatsCreateManySeatsInput | booking_seatsCreateManySeatsInput[]
    skipDuplicates?: boolean
  }

  export type ShowCreateWithoutSeatsInput = {
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
    booking?: bookingCreateNestedManyWithoutShowsInput
    movie: MovieCreateNestedOneWithoutShowsInput
    theatre: theatreCreateNestedOneWithoutShowsInput
    screens: ScreenCreateNestedOneWithoutShowsInput
  }

  export type ShowUncheckedCreateWithoutSeatsInput = {
    Show_Id?: number
    Movie_Id: number
    Theatre_Id: number
    Screen_no: number
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
    booking?: bookingUncheckedCreateNestedManyWithoutShowsInput
  }

  export type ShowCreateOrConnectWithoutSeatsInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutSeatsInput, ShowUncheckedCreateWithoutSeatsInput>
  }

  export type booking_seatsUpsertWithWhereUniqueWithoutSeatsInput = {
    where: booking_seatsWhereUniqueInput
    update: XOR<booking_seatsUpdateWithoutSeatsInput, booking_seatsUncheckedUpdateWithoutSeatsInput>
    create: XOR<booking_seatsCreateWithoutSeatsInput, booking_seatsUncheckedCreateWithoutSeatsInput>
  }

  export type booking_seatsUpdateWithWhereUniqueWithoutSeatsInput = {
    where: booking_seatsWhereUniqueInput
    data: XOR<booking_seatsUpdateWithoutSeatsInput, booking_seatsUncheckedUpdateWithoutSeatsInput>
  }

  export type booking_seatsUpdateManyWithWhereWithoutSeatsInput = {
    where: booking_seatsScalarWhereInput
    data: XOR<booking_seatsUpdateManyMutationInput, booking_seatsUncheckedUpdateManyWithoutSeatsInput>
  }

  export type booking_seatsScalarWhereInput = {
    AND?: booking_seatsScalarWhereInput | booking_seatsScalarWhereInput[]
    OR?: booking_seatsScalarWhereInput[]
    NOT?: booking_seatsScalarWhereInput | booking_seatsScalarWhereInput[]
    booking_seat_id?: IntFilter<"booking_seats"> | number
    booking_Id?: IntNullableFilter<"booking_seats"> | number | null
    seat_id?: IntNullableFilter<"booking_seats"> | number | null
  }

  export type ShowUpsertWithoutSeatsInput = {
    update: XOR<ShowUpdateWithoutSeatsInput, ShowUncheckedUpdateWithoutSeatsInput>
    create: XOR<ShowCreateWithoutSeatsInput, ShowUncheckedCreateWithoutSeatsInput>
    where?: ShowWhereInput
  }

  export type ShowUpdateToOneWithWhereWithoutSeatsInput = {
    where?: ShowWhereInput
    data: XOR<ShowUpdateWithoutSeatsInput, ShowUncheckedUpdateWithoutSeatsInput>
  }

  export type ShowUpdateWithoutSeatsInput = {
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
    booking?: bookingUpdateManyWithoutShowsNestedInput
    movie?: MovieUpdateOneRequiredWithoutShowsNestedInput
    theatre?: theatreUpdateOneRequiredWithoutShowsNestedInput
    screens?: ScreenUpdateOneRequiredWithoutShowsNestedInput
  }

  export type ShowUncheckedUpdateWithoutSeatsInput = {
    Show_Id?: IntFieldUpdateOperationsInput | number
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Theatre_Id?: IntFieldUpdateOperationsInput | number
    Screen_no?: IntFieldUpdateOperationsInput | number
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
    booking?: bookingUncheckedUpdateManyWithoutShowsNestedInput
  }

  export type MovieCreateWithoutReviewsInput = {
    Title: string
    Genre?: string | null
    Language?: string | null
    Duration?: number | null
    Trailer_URL?: string | null
    Rating?: number | null
    Description?: string | null
    Release_date?: Date | string | null
    Poster_url?: string | null
    movie_actors?: Movie_ActorCreateNestedManyWithoutMoviesInput
    shows?: ShowCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutReviewsInput = {
    Movie_Id?: number
    Title: string
    Genre?: string | null
    Language?: string | null
    Duration?: number | null
    Trailer_URL?: string | null
    Rating?: number | null
    Description?: string | null
    Release_date?: Date | string | null
    Poster_url?: string | null
    movie_actors?: Movie_ActorUncheckedCreateNestedManyWithoutMoviesInput
    shows?: ShowUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutReviewsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutReviewsInput, MovieUncheckedCreateWithoutReviewsInput>
  }

  export type MovieUpsertWithoutReviewsInput = {
    update: XOR<MovieUpdateWithoutReviewsInput, MovieUncheckedUpdateWithoutReviewsInput>
    create: XOR<MovieCreateWithoutReviewsInput, MovieUncheckedCreateWithoutReviewsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutReviewsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutReviewsInput, MovieUncheckedUpdateWithoutReviewsInput>
  }

  export type MovieUpdateWithoutReviewsInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Genre?: NullableStringFieldUpdateOperationsInput | string | null
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    Trailer_URL?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableFloatFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    movie_actors?: Movie_ActorUpdateManyWithoutMoviesNestedInput
    shows?: ShowUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutReviewsInput = {
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Genre?: NullableStringFieldUpdateOperationsInput | string | null
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    Duration?: NullableIntFieldUpdateOperationsInput | number | null
    Trailer_URL?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: NullableFloatFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    movie_actors?: Movie_ActorUncheckedUpdateManyWithoutMoviesNestedInput
    shows?: ShowUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type customerCreateWithoutBookingInput = {
    F_Name: string
    L_Name: string
    Email: string
    Phone_No: bigint | number
    Password: string
    Created_at?: Date | string | null
  }

  export type customerUncheckedCreateWithoutBookingInput = {
    customer_Id?: number
    F_Name: string
    L_Name: string
    Email: string
    Phone_No: bigint | number
    Password: string
    Created_at?: Date | string | null
  }

  export type customerCreateOrConnectWithoutBookingInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutBookingInput, customerUncheckedCreateWithoutBookingInput>
  }

  export type ShowCreateWithoutBookingInput = {
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
    seats?: SeatCreateNestedManyWithoutShowsInput
    movie: MovieCreateNestedOneWithoutShowsInput
    theatre: theatreCreateNestedOneWithoutShowsInput
    screens: ScreenCreateNestedOneWithoutShowsInput
  }

  export type ShowUncheckedCreateWithoutBookingInput = {
    Show_Id?: number
    Movie_Id: number
    Theatre_Id: number
    Screen_no: number
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
    seats?: SeatUncheckedCreateNestedManyWithoutShowsInput
  }

  export type ShowCreateOrConnectWithoutBookingInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutBookingInput, ShowUncheckedCreateWithoutBookingInput>
  }

  export type booking_seatsCreateWithoutBookingInput = {
    seats?: SeatCreateNestedOneWithoutBooking_seatsInput
  }

  export type booking_seatsUncheckedCreateWithoutBookingInput = {
    booking_seat_id?: number
    seat_id?: number | null
  }

  export type booking_seatsCreateOrConnectWithoutBookingInput = {
    where: booking_seatsWhereUniqueInput
    create: XOR<booking_seatsCreateWithoutBookingInput, booking_seatsUncheckedCreateWithoutBookingInput>
  }

  export type booking_seatsCreateManyBookingInputEnvelope = {
    data: booking_seatsCreateManyBookingInput | booking_seatsCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type customerUpsertWithoutBookingInput = {
    update: XOR<customerUpdateWithoutBookingInput, customerUncheckedUpdateWithoutBookingInput>
    create: XOR<customerCreateWithoutBookingInput, customerUncheckedCreateWithoutBookingInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutBookingInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutBookingInput, customerUncheckedUpdateWithoutBookingInput>
  }

  export type customerUpdateWithoutBookingInput = {
    F_Name?: StringFieldUpdateOperationsInput | string
    L_Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone_No?: BigIntFieldUpdateOperationsInput | bigint | number
    Password?: StringFieldUpdateOperationsInput | string
    Created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customerUncheckedUpdateWithoutBookingInput = {
    customer_Id?: IntFieldUpdateOperationsInput | number
    F_Name?: StringFieldUpdateOperationsInput | string
    L_Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Phone_No?: BigIntFieldUpdateOperationsInput | bigint | number
    Password?: StringFieldUpdateOperationsInput | string
    Created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShowUpsertWithoutBookingInput = {
    update: XOR<ShowUpdateWithoutBookingInput, ShowUncheckedUpdateWithoutBookingInput>
    create: XOR<ShowCreateWithoutBookingInput, ShowUncheckedCreateWithoutBookingInput>
    where?: ShowWhereInput
  }

  export type ShowUpdateToOneWithWhereWithoutBookingInput = {
    where?: ShowWhereInput
    data: XOR<ShowUpdateWithoutBookingInput, ShowUncheckedUpdateWithoutBookingInput>
  }

  export type ShowUpdateWithoutBookingInput = {
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
    seats?: SeatUpdateManyWithoutShowsNestedInput
    movie?: MovieUpdateOneRequiredWithoutShowsNestedInput
    theatre?: theatreUpdateOneRequiredWithoutShowsNestedInput
    screens?: ScreenUpdateOneRequiredWithoutShowsNestedInput
  }

  export type ShowUncheckedUpdateWithoutBookingInput = {
    Show_Id?: IntFieldUpdateOperationsInput | number
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Theatre_Id?: IntFieldUpdateOperationsInput | number
    Screen_no?: IntFieldUpdateOperationsInput | number
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
    seats?: SeatUncheckedUpdateManyWithoutShowsNestedInput
  }

  export type booking_seatsUpsertWithWhereUniqueWithoutBookingInput = {
    where: booking_seatsWhereUniqueInput
    update: XOR<booking_seatsUpdateWithoutBookingInput, booking_seatsUncheckedUpdateWithoutBookingInput>
    create: XOR<booking_seatsCreateWithoutBookingInput, booking_seatsUncheckedCreateWithoutBookingInput>
  }

  export type booking_seatsUpdateWithWhereUniqueWithoutBookingInput = {
    where: booking_seatsWhereUniqueInput
    data: XOR<booking_seatsUpdateWithoutBookingInput, booking_seatsUncheckedUpdateWithoutBookingInput>
  }

  export type booking_seatsUpdateManyWithWhereWithoutBookingInput = {
    where: booking_seatsScalarWhereInput
    data: XOR<booking_seatsUpdateManyMutationInput, booking_seatsUncheckedUpdateManyWithoutBookingInput>
  }

  export type bookingCreateWithoutBooking_seatsInput = {
    Amount: Decimal | DecimalJsLike | number | string
    Payment_method?: string | null
    Status?: string
    payment_time?: Date | string | null
    customer?: customerCreateNestedOneWithoutBookingInput
    shows?: ShowCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutBooking_seatsInput = {
    booking_Id?: number
    customer_Id?: number | null
    show_id?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    Payment_method?: string | null
    Status?: string
    payment_time?: Date | string | null
  }

  export type bookingCreateOrConnectWithoutBooking_seatsInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutBooking_seatsInput, bookingUncheckedCreateWithoutBooking_seatsInput>
  }

  export type SeatCreateWithoutBooking_seatsInput = {
    seat_name: string
    seat_type?: string | null
    status?: $Enums.seats_status | null
    shows: ShowCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateWithoutBooking_seatsInput = {
    seat_id?: number
    show_id: number
    seat_name: string
    seat_type?: string | null
    status?: $Enums.seats_status | null
  }

  export type SeatCreateOrConnectWithoutBooking_seatsInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutBooking_seatsInput, SeatUncheckedCreateWithoutBooking_seatsInput>
  }

  export type bookingUpsertWithoutBooking_seatsInput = {
    update: XOR<bookingUpdateWithoutBooking_seatsInput, bookingUncheckedUpdateWithoutBooking_seatsInput>
    create: XOR<bookingCreateWithoutBooking_seatsInput, bookingUncheckedCreateWithoutBooking_seatsInput>
    where?: bookingWhereInput
  }

  export type bookingUpdateToOneWithWhereWithoutBooking_seatsInput = {
    where?: bookingWhereInput
    data: XOR<bookingUpdateWithoutBooking_seatsInput, bookingUncheckedUpdateWithoutBooking_seatsInput>
  }

  export type bookingUpdateWithoutBooking_seatsInput = {
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: StringFieldUpdateOperationsInput | string
    payment_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customerUpdateOneWithoutBookingNestedInput
    shows?: ShowUpdateOneWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutBooking_seatsInput = {
    booking_Id?: IntFieldUpdateOperationsInput | number
    customer_Id?: NullableIntFieldUpdateOperationsInput | number | null
    show_id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: StringFieldUpdateOperationsInput | string
    payment_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SeatUpsertWithoutBooking_seatsInput = {
    update: XOR<SeatUpdateWithoutBooking_seatsInput, SeatUncheckedUpdateWithoutBooking_seatsInput>
    create: XOR<SeatCreateWithoutBooking_seatsInput, SeatUncheckedCreateWithoutBooking_seatsInput>
    where?: SeatWhereInput
  }

  export type SeatUpdateToOneWithWhereWithoutBooking_seatsInput = {
    where?: SeatWhereInput
    data: XOR<SeatUpdateWithoutBooking_seatsInput, SeatUncheckedUpdateWithoutBooking_seatsInput>
  }

  export type SeatUpdateWithoutBooking_seatsInput = {
    seat_name?: StringFieldUpdateOperationsInput | string
    seat_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumseats_statusFieldUpdateOperationsInput | $Enums.seats_status | null
    shows?: ShowUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateWithoutBooking_seatsInput = {
    seat_id?: IntFieldUpdateOperationsInput | number
    show_id?: IntFieldUpdateOperationsInput | number
    seat_name?: StringFieldUpdateOperationsInput | string
    seat_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumseats_statusFieldUpdateOperationsInput | $Enums.seats_status | null
  }

  export type bookingCreateWithoutCustomerInput = {
    Amount: Decimal | DecimalJsLike | number | string
    Payment_method?: string | null
    Status?: string
    payment_time?: Date | string | null
    shows?: ShowCreateNestedOneWithoutBookingInput
    booking_seats?: booking_seatsCreateNestedManyWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutCustomerInput = {
    booking_Id?: number
    show_id?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    Payment_method?: string | null
    Status?: string
    payment_time?: Date | string | null
    booking_seats?: booking_seatsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingCreateOrConnectWithoutCustomerInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutCustomerInput, bookingUncheckedCreateWithoutCustomerInput>
  }

  export type bookingCreateManyCustomerInputEnvelope = {
    data: bookingCreateManyCustomerInput | bookingCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type bookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutCustomerInput, bookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<bookingCreateWithoutCustomerInput, bookingUncheckedCreateWithoutCustomerInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutCustomerInput, bookingUncheckedUpdateWithoutCustomerInput>
  }

  export type bookingUpdateManyWithWhereWithoutCustomerInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ScreenCreateWithoutTheatreInput = {
    screen_no: number
    Screen_name?: string | null
    No_of_seats?: number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
    shows?: ShowCreateNestedManyWithoutScreensInput
  }

  export type ScreenUncheckedCreateWithoutTheatreInput = {
    screen_no: number
    Screen_name?: string | null
    No_of_seats?: number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
    shows?: ShowUncheckedCreateNestedManyWithoutScreensInput
  }

  export type ScreenCreateOrConnectWithoutTheatreInput = {
    where: ScreenWhereUniqueInput
    create: XOR<ScreenCreateWithoutTheatreInput, ScreenUncheckedCreateWithoutTheatreInput>
  }

  export type ScreenCreateManyTheatreInputEnvelope = {
    data: ScreenCreateManyTheatreInput | ScreenCreateManyTheatreInput[]
    skipDuplicates?: boolean
  }

  export type ShowCreateWithoutTheatreInput = {
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
    booking?: bookingCreateNestedManyWithoutShowsInput
    seats?: SeatCreateNestedManyWithoutShowsInput
    movie: MovieCreateNestedOneWithoutShowsInput
    screens: ScreenCreateNestedOneWithoutShowsInput
  }

  export type ShowUncheckedCreateWithoutTheatreInput = {
    Show_Id?: number
    Movie_Id: number
    Screen_no: number
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
    booking?: bookingUncheckedCreateNestedManyWithoutShowsInput
    seats?: SeatUncheckedCreateNestedManyWithoutShowsInput
  }

  export type ShowCreateOrConnectWithoutTheatreInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutTheatreInput, ShowUncheckedCreateWithoutTheatreInput>
  }

  export type ShowCreateManyTheatreInputEnvelope = {
    data: ShowCreateManyTheatreInput | ShowCreateManyTheatreInput[]
    skipDuplicates?: boolean
  }

  export type ScreenUpsertWithWhereUniqueWithoutTheatreInput = {
    where: ScreenWhereUniqueInput
    update: XOR<ScreenUpdateWithoutTheatreInput, ScreenUncheckedUpdateWithoutTheatreInput>
    create: XOR<ScreenCreateWithoutTheatreInput, ScreenUncheckedCreateWithoutTheatreInput>
  }

  export type ScreenUpdateWithWhereUniqueWithoutTheatreInput = {
    where: ScreenWhereUniqueInput
    data: XOR<ScreenUpdateWithoutTheatreInput, ScreenUncheckedUpdateWithoutTheatreInput>
  }

  export type ScreenUpdateManyWithWhereWithoutTheatreInput = {
    where: ScreenScalarWhereInput
    data: XOR<ScreenUpdateManyMutationInput, ScreenUncheckedUpdateManyWithoutTheatreInput>
  }

  export type ScreenScalarWhereInput = {
    AND?: ScreenScalarWhereInput | ScreenScalarWhereInput[]
    OR?: ScreenScalarWhereInput[]
    NOT?: ScreenScalarWhereInput | ScreenScalarWhereInput[]
    screen_no?: IntFilter<"Screen"> | number
    theatre_Id?: IntFilter<"Screen"> | number
    Screen_name?: StringNullableFilter<"Screen"> | string | null
    No_of_seats?: IntNullableFilter<"Screen"> | number | null
    Layout_structure?: JsonNullableFilter<"Screen">
  }

  export type ShowUpsertWithWhereUniqueWithoutTheatreInput = {
    where: ShowWhereUniqueInput
    update: XOR<ShowUpdateWithoutTheatreInput, ShowUncheckedUpdateWithoutTheatreInput>
    create: XOR<ShowCreateWithoutTheatreInput, ShowUncheckedCreateWithoutTheatreInput>
  }

  export type ShowUpdateWithWhereUniqueWithoutTheatreInput = {
    where: ShowWhereUniqueInput
    data: XOR<ShowUpdateWithoutTheatreInput, ShowUncheckedUpdateWithoutTheatreInput>
  }

  export type ShowUpdateManyWithWhereWithoutTheatreInput = {
    where: ShowScalarWhereInput
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyWithoutTheatreInput>
  }

  export type Movie_ActorCreateManyMoviesInput = {
    Actor_Id: number
    Role_Name?: string | null
  }

  export type ReviewCreateManyMoviesInput = {
    Review_Id?: number
    Rating?: number | null
    Comment?: string | null
    Reviewed_At?: Date | string | null
  }

  export type ShowCreateManyMovieInput = {
    Show_Id?: number
    Theatre_Id: number
    Screen_no: number
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
  }

  export type Movie_ActorUpdateWithoutMoviesInput = {
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: ActorUpdateOneRequiredWithoutMovie_actorsNestedInput
  }

  export type Movie_ActorUncheckedUpdateWithoutMoviesInput = {
    Actor_Id?: IntFieldUpdateOperationsInput | number
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Movie_ActorUncheckedUpdateManyWithoutMoviesInput = {
    Actor_Id?: IntFieldUpdateOperationsInput | number
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutMoviesInput = {
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Reviewed_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateWithoutMoviesInput = {
    Review_Id?: IntFieldUpdateOperationsInput | number
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Reviewed_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutMoviesInput = {
    Review_Id?: IntFieldUpdateOperationsInput | number
    Rating?: NullableIntFieldUpdateOperationsInput | number | null
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Reviewed_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShowUpdateWithoutMovieInput = {
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
    booking?: bookingUpdateManyWithoutShowsNestedInput
    seats?: SeatUpdateManyWithoutShowsNestedInput
    theatre?: theatreUpdateOneRequiredWithoutShowsNestedInput
    screens?: ScreenUpdateOneRequiredWithoutShowsNestedInput
  }

  export type ShowUncheckedUpdateWithoutMovieInput = {
    Show_Id?: IntFieldUpdateOperationsInput | number
    Theatre_Id?: IntFieldUpdateOperationsInput | number
    Screen_no?: IntFieldUpdateOperationsInput | number
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
    booking?: bookingUncheckedUpdateManyWithoutShowsNestedInput
    seats?: SeatUncheckedUpdateManyWithoutShowsNestedInput
  }

  export type ShowUncheckedUpdateManyWithoutMovieInput = {
    Show_Id?: IntFieldUpdateOperationsInput | number
    Theatre_Id?: IntFieldUpdateOperationsInput | number
    Screen_no?: IntFieldUpdateOperationsInput | number
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
  }

  export type Movie_ActorCreateManyActorInput = {
    movie_Id: number
    Role_Name?: string | null
  }

  export type Movie_ActorUpdateWithoutActorInput = {
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: MovieUpdateOneRequiredWithoutMovie_actorsNestedInput
  }

  export type Movie_ActorUncheckedUpdateWithoutActorInput = {
    movie_Id?: IntFieldUpdateOperationsInput | number
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Movie_ActorUncheckedUpdateManyWithoutActorInput = {
    movie_Id?: IntFieldUpdateOperationsInput | number
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShowCreateManyScreensInput = {
    Show_Id?: number
    Movie_Id: number
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
  }

  export type ShowUpdateWithoutScreensInput = {
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
    booking?: bookingUpdateManyWithoutShowsNestedInput
    seats?: SeatUpdateManyWithoutShowsNestedInput
    movie?: MovieUpdateOneRequiredWithoutShowsNestedInput
    theatre?: theatreUpdateOneRequiredWithoutShowsNestedInput
  }

  export type ShowUncheckedUpdateWithoutScreensInput = {
    Show_Id?: IntFieldUpdateOperationsInput | number
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
    booking?: bookingUncheckedUpdateManyWithoutShowsNestedInput
    seats?: SeatUncheckedUpdateManyWithoutShowsNestedInput
  }

  export type ShowUncheckedUpdateManyWithoutScreensInput = {
    Show_Id?: IntFieldUpdateOperationsInput | number
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
  }

  export type bookingCreateManyShowsInput = {
    booking_Id?: number
    customer_Id?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    Payment_method?: string | null
    Status?: string
    payment_time?: Date | string | null
  }

  export type SeatCreateManyShowsInput = {
    seat_id?: number
    seat_name: string
    seat_type?: string | null
    status?: $Enums.seats_status | null
  }

  export type bookingUpdateWithoutShowsInput = {
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: StringFieldUpdateOperationsInput | string
    payment_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customerUpdateOneWithoutBookingNestedInput
    booking_seats?: booking_seatsUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutShowsInput = {
    booking_Id?: IntFieldUpdateOperationsInput | number
    customer_Id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: StringFieldUpdateOperationsInput | string
    payment_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    booking_seats?: booking_seatsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateManyWithoutShowsInput = {
    booking_Id?: IntFieldUpdateOperationsInput | number
    customer_Id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: StringFieldUpdateOperationsInput | string
    payment_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SeatUpdateWithoutShowsInput = {
    seat_name?: StringFieldUpdateOperationsInput | string
    seat_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumseats_statusFieldUpdateOperationsInput | $Enums.seats_status | null
    booking_seats?: booking_seatsUpdateManyWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateWithoutShowsInput = {
    seat_id?: IntFieldUpdateOperationsInput | number
    seat_name?: StringFieldUpdateOperationsInput | string
    seat_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumseats_statusFieldUpdateOperationsInput | $Enums.seats_status | null
    booking_seats?: booking_seatsUncheckedUpdateManyWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateManyWithoutShowsInput = {
    seat_id?: IntFieldUpdateOperationsInput | number
    seat_name?: StringFieldUpdateOperationsInput | string
    seat_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumseats_statusFieldUpdateOperationsInput | $Enums.seats_status | null
  }

  export type booking_seatsCreateManySeatsInput = {
    booking_seat_id?: number
    booking_Id?: number | null
  }

  export type booking_seatsUpdateWithoutSeatsInput = {
    booking?: bookingUpdateOneWithoutBooking_seatsNestedInput
  }

  export type booking_seatsUncheckedUpdateWithoutSeatsInput = {
    booking_seat_id?: IntFieldUpdateOperationsInput | number
    booking_Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type booking_seatsUncheckedUpdateManyWithoutSeatsInput = {
    booking_seat_id?: IntFieldUpdateOperationsInput | number
    booking_Id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type booking_seatsCreateManyBookingInput = {
    booking_seat_id?: number
    seat_id?: number | null
  }

  export type booking_seatsUpdateWithoutBookingInput = {
    seats?: SeatUpdateOneWithoutBooking_seatsNestedInput
  }

  export type booking_seatsUncheckedUpdateWithoutBookingInput = {
    booking_seat_id?: IntFieldUpdateOperationsInput | number
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type booking_seatsUncheckedUpdateManyWithoutBookingInput = {
    booking_seat_id?: IntFieldUpdateOperationsInput | number
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookingCreateManyCustomerInput = {
    booking_Id?: number
    show_id?: number | null
    Amount: Decimal | DecimalJsLike | number | string
    Payment_method?: string | null
    Status?: string
    payment_time?: Date | string | null
  }

  export type bookingUpdateWithoutCustomerInput = {
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: StringFieldUpdateOperationsInput | string
    payment_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shows?: ShowUpdateOneWithoutBookingNestedInput
    booking_seats?: booking_seatsUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutCustomerInput = {
    booking_Id?: IntFieldUpdateOperationsInput | number
    show_id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: StringFieldUpdateOperationsInput | string
    payment_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    booking_seats?: booking_seatsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateManyWithoutCustomerInput = {
    booking_Id?: IntFieldUpdateOperationsInput | number
    show_id?: NullableIntFieldUpdateOperationsInput | number | null
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: StringFieldUpdateOperationsInput | string
    payment_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScreenCreateManyTheatreInput = {
    screen_no: number
    Screen_name?: string | null
    No_of_seats?: number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ShowCreateManyTheatreInput = {
    Show_Id?: number
    Movie_Id: number
    Screen_no: number
    Show_date: Date | string
    Start_time: Date | string
    Show_dimension: $Enums.shows_Show_dimension
  }

  export type ScreenUpdateWithoutTheatreInput = {
    screen_no?: IntFieldUpdateOperationsInput | number
    Screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    No_of_seats?: NullableIntFieldUpdateOperationsInput | number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
    shows?: ShowUpdateManyWithoutScreensNestedInput
  }

  export type ScreenUncheckedUpdateWithoutTheatreInput = {
    screen_no?: IntFieldUpdateOperationsInput | number
    Screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    No_of_seats?: NullableIntFieldUpdateOperationsInput | number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
    shows?: ShowUncheckedUpdateManyWithoutScreensNestedInput
  }

  export type ScreenUncheckedUpdateManyWithoutTheatreInput = {
    screen_no?: IntFieldUpdateOperationsInput | number
    Screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    No_of_seats?: NullableIntFieldUpdateOperationsInput | number | null
    Layout_structure?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ShowUpdateWithoutTheatreInput = {
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
    booking?: bookingUpdateManyWithoutShowsNestedInput
    seats?: SeatUpdateManyWithoutShowsNestedInput
    movie?: MovieUpdateOneRequiredWithoutShowsNestedInput
    screens?: ScreenUpdateOneRequiredWithoutShowsNestedInput
  }

  export type ShowUncheckedUpdateWithoutTheatreInput = {
    Show_Id?: IntFieldUpdateOperationsInput | number
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Screen_no?: IntFieldUpdateOperationsInput | number
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
    booking?: bookingUncheckedUpdateManyWithoutShowsNestedInput
    seats?: SeatUncheckedUpdateManyWithoutShowsNestedInput
  }

  export type ShowUncheckedUpdateManyWithoutTheatreInput = {
    Show_Id?: IntFieldUpdateOperationsInput | number
    Movie_Id?: IntFieldUpdateOperationsInput | number
    Screen_no?: IntFieldUpdateOperationsInput | number
    Show_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    Show_dimension?: Enumshows_Show_dimensionFieldUpdateOperationsInput | $Enums.shows_Show_dimension
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