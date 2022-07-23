import _ from 'lodash';
import { createTransitConverters, write, read } from '../serializer';

const isTransit = res => {
  const headers = res.headers || {};
  const contentType = headers['content-type'] || '';

  return contentType.startsWith('application/json');
};

/**
   Transit encode the response
 */
export default class TransitResponse {
  error(ctx) {
    console.log("starting error", ctx)
    const { reader } = createTransitConverters(ctx.typeHandlers);

    if (!ctx.error.response) {
      return ctx;
    }

    if (!isTransit(ctx.error.response)) {
      return ctx;
    }
    console.log(" error ctx", ctx)
    return _.update({ ...ctx }, 'error.response.data', data => reader.read(data));
  }

  leave(ctx) {

    console.log("starting leave 10", ctx)
    const { reader } = createTransitConverters(ctx.typeHandlers);


    if (!ctx.res) {
      return ctx;
    }

    if (!isTransit(ctx.res)) {
      return ctx;
    }

    // let transitData = write(ctx)
    // transitData = read(transitData)
    // return transitData 

    try{
      const { writer } = createTransitConverters(ctx.typeHandlers, { verbose: false });
      const transitData = writer.write({...ctx.res.data})
      //build new copy of repo with everything the same in native SDK but log these and compare results, transitData, ctx.typeHandlers
      console.log("transitData encoded", transitData)
      const simpleParse = reader.read(transitData);
      console.log("transitData decoded", simpleParse)
      if (simpleParse.data){
        console.log("has simpleParse.data")
        for (let prop in simpleParse.data) {
          if (prop === "id"){
            console.log("its the id prop")
            simpleParse.data[prop] = {
              _sdkType: 'UUID',
              uuid: simpleParse.data[prop]
            }
          }
        }
      }

      return _.set({ ...ctx }, 'res.data', simpleParse);
      // return _.set({ ...ctx }, 'res.data', reader.read(transitData));
    }
    catch(e){
      console.log("an error was caught")
    }
    let transitData = write( {...ctx.data})
    console.log("read it like this", read(transitData))
    transitData = read(transitData)
    return transitData 
    
    //return _.update({ ...ctx }, 'res.data', data => reader.read(data));
  }
}
