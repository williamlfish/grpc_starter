export async function health(_: any, cb: Function) {
    return cb(null, {
      success: true,
      message: 'up and running bb, nice to see ya!',
    });
  }