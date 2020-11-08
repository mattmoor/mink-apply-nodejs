# Node.js Sample with `mink apply`

_This repository assumes that you have the latest release of [`mink`](https://github.com/mattmoor/mink) CLI installed locally and the controllers on your cluster._

## Deploying Everything

With a appropriately configured `~/.mink.yaml` deploying everything in this repository is as simple as:

```shell
mink apply
```

## Iterating on a single function

You can iterate on a single function (e.g. `add`) via:

```shell
mink apply -f add
```

## Releasing

You can build a `release.yaml` for this repository with:
```shell
mink resolve --image=gcr.io/my-releases/images > release.yaml
```

