// This has to run before qdev.ts loads. `beforeAll` is too late
globalThis.qTest = true;
globalThis.qRuntimeQrl = true;
globalThis.qDev = true;
globalThis.qInspector = false;

// beforeAll(async () => {
//   const {  } = await import("@builder.io/qwik/testing");
//   const { setPlatform } = await import("@builder.io/qwik/core");
//   setPlatform(getTestPlatform() as any);
// });
