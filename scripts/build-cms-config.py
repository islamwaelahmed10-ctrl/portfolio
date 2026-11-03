"""Expands the YAML anchors in cms-config.src.yml into plain public/admin/config.yml (the CMS reads that file)."""
import yaml, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
src = yaml.safe_load((root / 'scripts/cms-config.src.yml').read_text())
cfg = {k: v for k, v in src.items() if not k.startswith('x-')}
class NoAlias(yaml.SafeDumper):
    def ignore_aliases(self, data): return True
out = '# Generated from scripts/cms-config.src.yml by scripts/build-cms-config.py — edit the source, not this file.\n'
out += yaml.dump(cfg, Dumper=NoAlias, allow_unicode=True, sort_keys=False, width=200)
(root / 'public/admin/config.yml').write_text(out)
print('ok', len(out))
